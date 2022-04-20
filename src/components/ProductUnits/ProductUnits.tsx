import React from "react";
import { IProductUnitsProps } from "../../interfaces/IProductUnitsProps";

const ProductUnits: React.FC<IProductUnitsProps> = ({
  unitFull,
  unitAlt,
  handleSelect,
  showPriceForFull,
}) => {
  return (
    <div className="product_units">
      <div className="unit--wrapper">
        <div
          className={
            showPriceForFull ? "unit--select" : "unit--select unit--active"
          }
          onClick={() => handleSelect(false)}
        >
          <p className="ng-binding">За {unitAlt}</p>
        </div>
        <div
          className={
            showPriceForFull ? "unit--select unit--active" : "unit--select"
          }
          onClick={() => handleSelect(true)}
        >
          <p className="ng-binding">За {unitFull}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductUnits;
