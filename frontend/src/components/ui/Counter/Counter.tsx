import { useState } from 'react';
import clsx from 'clsx';

import MinusSvg from './images/minus.svg';
import PlusSvg from './images/plus.svg';

import type { CounterProps } from './Counter.props';

import s from './Counter.module.scss';

export const Counter = ({
  className,
  value,
  onChange,
  min = 1,
  max = 999,
}: CounterProps) => {
  const [internalValue, setInternalValue] = useState(min);
  const count = value ?? internalValue;

  const setCount = (nextValue: number) => {
    const normalized = Math.max(min, Math.min(max, nextValue));

    if (value === undefined) {
      setInternalValue(normalized);
    }

    onChange?.(normalized);
  };

  return (
    <div className={clsx(s.counter, className)}>
      <button
        className={clsx(s.button, s.decrement)}
        type='button'
        onClick={() => setCount(count - 1)}
      >
        <MinusSvg />
      </button>
      <span className={s.value}>{count}</span>
      <button
        className={clsx(s.button, s.increment)}
        type='button'
        onClick={() => setCount(count + 1)}
      >
        <PlusSvg />
      </button>
    </div>
  );
};
