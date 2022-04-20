import React from "react";
import { IProductPrice } from "../../interfaces/IProductPrice";

const ProductPrice: React.FC<IProductPrice> = ({
  retailPrice,
  retailPriceAlt,
  showPriceForFull,
}) => {
  const price = showPriceForFull ? retailPrice : retailPriceAlt;
  return (
    <p className="product_price_default">
      <span className="retailPrice">{price}</span>
      <span className="rouble__i black__i">
        <svg
          version="1.0"
          id="rouble__g"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="30px"
          height="22px"
          viewBox="0 0 50 50"
          enableBackground="new 0 0 50 50"
          xmlSpace="preserve"
        >
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#rouble_gray"
          ></use>
        </svg>
      </span>
    </p>
  );
};

export default ProductPrice;
