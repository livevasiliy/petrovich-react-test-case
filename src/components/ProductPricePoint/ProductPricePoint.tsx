import React from "react";
import { IProductPricePointProps } from "../../interfaces/IProductPricePointProps";

const ProductPricePoint: React.FC<IProductPricePointProps> = ({
  bonusAmount,
}) => {
  return (
    <div className="product_price_points">
      <p className="ng-binding">Можно купить за {bonusAmount} балла</p>
    </div>
  );
};

export default ProductPricePoint;
