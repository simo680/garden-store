import clsx from 'clsx';

import type { ButtonProps } from './Button.props';

import s from './Button.module.scss';

const Button = (props: ButtonProps) => {
  const {
    fullWidth = false,
    appearance = 'primary',
    ref,
    type = 'button',
    className,
    isDisabled = false,
    children,
    ...rest
  } = props;

  return (
    <button
      className={clsx(
        s.button,
        s[appearance],
        fullWidth && s.fullWidth,
        isDisabled && s.disabled,
        className,
      )}
      ref={ref}
      type={type}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
