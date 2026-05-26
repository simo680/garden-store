import type { MouseEvent } from 'react';

export type ProductItemProps = {
  imgSrc: string;
  title: string;
  price: number;
  oldPrice?: number;
  onActionClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
