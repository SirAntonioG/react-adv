import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  IProductCardProps,
  IProductContextProps,
} from "../interfaces/products";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
