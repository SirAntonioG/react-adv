import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { IOnChangeArgs, IProduct, IProductContextProps } from "../interfaces/products";
import styles from "../styles/styles.module.css";

export interface IProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: IProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
