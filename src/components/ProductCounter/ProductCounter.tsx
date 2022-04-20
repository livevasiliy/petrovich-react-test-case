import React from "react";
import { IProductCounterProps } from "../../interfaces/IProductCounterProps";

const ProductCounter: React.FC<IProductCounterProps> = ({
  amount,
  handleAmount,
}) => {
  return (
    <div className="product_count_wrapper">
      <div className="stepper">
        <input
          className="product__count stepper-input"
          type="text"
          value={amount}
          readOnly
        />
        <span
          className="stepper-arrow up"
          onClick={() => {
            handleAmount(amount + 1);
          }}
        ></span>
        <span
          className="stepper-arrow down"
          onClick={() => {
            handleAmount(amount === 0 ? 0 : amount - 1);
          }}
        ></span>
      </div>
    </div>
  );
};

export default ProductCounter;
