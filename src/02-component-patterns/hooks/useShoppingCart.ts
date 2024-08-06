import { useState } from "react";
import { IProduct, IProductInCart } from "../interfaces/products";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: IProduct }) => {
    setShoppingCart((prev) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        return { ...rest };
      }
      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
  };

  return { shoppingCart, onProductCountChange };
};
