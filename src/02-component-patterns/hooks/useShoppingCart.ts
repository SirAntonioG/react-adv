import { useState } from "react";
import { IProduct, IProductInCart } from "../interfaces/products";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: IProduct }) => {
    setShoppingCart((prev) => {
      const productInCart: IProductInCart = prev[product.id] || { ...product, count: 0 };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      // delete product
      const { [product.id]: toDelete, ...rest } = prev;
      return { ...rest };

      // previous code

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prev;
      //   return { ...rest };
      // }

      // return {
      //   ...prev,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return { shoppingCart, onProductCountChange };
};
