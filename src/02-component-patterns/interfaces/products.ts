import { ReactElement } from "react";

export interface IProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
}

export interface IProductCardHOCProps {
  ({ product, children }: IProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
