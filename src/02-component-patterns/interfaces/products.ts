import { IProductButtonsProps } from "../components/ProductButtons";
import { IProductCardProps } from "../components/ProductCard";
import { IProductImageProps } from "../components/ProductImage";
import { IProductTitleProps } from "../components/ProductTitle";

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
  Title: (Props: IProductTitleProps) => JSX.Element;
  Image: (Props: IProductImageProps) => JSX.Element;
  Buttons: (Props: IProductButtonsProps) => JSX.Element;
}
