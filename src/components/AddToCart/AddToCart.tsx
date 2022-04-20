import React from "react";
import { IAddCartProps } from "../../interfaces/IAddCartProps";

const AddToCart: React.FC<IAddCartProps> = ({ productId }) => {
  return (
    <span
      className="btn btn_cart"
      data-url="/cart/"
      data-product-id={productId}
    >
      <svg className="ic ic_cart">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart"></use>
      </svg>
      <span className="ng-binding">В корзину</span>
    </span>
  );
};

export default AddToCart;
