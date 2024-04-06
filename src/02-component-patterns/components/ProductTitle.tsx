import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface IProductTitleProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({
  title,
  className,
  style,
}: IProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ?? product.title}
    </span>
  );
};
