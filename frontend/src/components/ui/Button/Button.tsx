import clsx from 'clsx';

import type { ButtonProps } from './type';

import s from './Button.module.scss';

const Button = ({
  fullWidth = false,
  appearance = 'primary',
  ref,
  type = 'button',
  className,
  isDisabled = false,
  children,
  ...props
}: ButtonProps) => (
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
    {...props}
  >
    {children}
  </button>
);

export default Button;
