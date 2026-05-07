import { useNavigate } from 'react-router';
import clsx from 'clsx';

import type { LineButtonProps } from './LineButton.props';
import s from './LineButton.module.scss';

export const LineButton = (props: LineButtonProps) => {
  const { title, titleButton, path, className } = props;

  const navigate = useNavigate();

  return (
    <div className={clsx(s.container, className)}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.lineButton}>
        <div className={s.divider}></div>
        <button className={s.button} onClick={() => navigate(path)}>
          {titleButton}
        </button>
      </div>
    </div>
  );
};
