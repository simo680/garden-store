import React from 'react';
import clsx from 'clsx';

import type { InputProps } from './type';

import s from './Input.module.scss';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className,
      name,
      onChange,
      onBlur,
      appearance = 'primary',
      type,
      placeholder,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          className={clsx(s.input, s[appearance], className)}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);

export default Input;
