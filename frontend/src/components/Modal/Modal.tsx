import { useEffect, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import type { ModalProps } from './type';

import CrossIcon from './images/cross.svg';

import s from './Modal.module.scss';

const modalRoot = document.getElementById('react-modals');

export const Modal = ({
  onClose,
  children,
  className,
}: ModalProps): ReactElement => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div
        className={clsx(s.modal, className)}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={s.closeBtn} onClick={onClose}>
          <CrossIcon />
        </button>
        {children}
      </div>
    </div>,
    modalRoot!,
  );
};
