import React from "react";
import { IProductPriceClugProps } from "../../interfaces/IProductPriceClubProps";

const ProductPriceClub: React.FC<IProductPriceClugProps> = ({
  goldPrice,
  goldPriceAlt,
  showPriceForFull,
}) => {
  const price = showPriceForFull ? goldPrice : goldPriceAlt;
  return (
    <p className="product_price_club_card">
      <span className="product_price_club_card_text">
        По карте
        <br />
        клуба
      </span>
      <span className="goldPrice">{price}</span>
      <span className="rouble__i black__i">
        <svg
          version="1.0"
          id="rouble__b"
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
            xlinkHref="#rouble_black"
          ></use>
        </svg>
      </span>
    </p>
  );
};

export default ProductPriceClub;
