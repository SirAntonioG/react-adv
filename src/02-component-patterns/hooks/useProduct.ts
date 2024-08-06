import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct } from "../interfaces/products";

interface IUseProductArgs {
  product: IProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: IUseProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
