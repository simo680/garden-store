export type TProduct = {
  id: number;
  price: number;
  discont_price: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
};

export type TCartProduct = TProduct & {
  key: string;
  quantity: number;
};

export type TCategory = {
  id: number;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type OrderFormPayload = {
  name: string;
  phone: string;
  email: string;
};

export type DiscountFormPayload = {
  name: string;
  phone: string;
  email: string;
};

export type GetCategoriesPayload = Array<TCategory>;

export type TCategoryWithProducts = {
  category: TCategory;
  data: TProduct[];
};
