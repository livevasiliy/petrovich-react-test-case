import React from "react";
import { IProductStatusProps } from "../../interfaces/IProductStatusProps";

const ProductStatus: React.FC<IProductStatusProps> = ({ status }) => {
  return (
    <div className="product_status_tooltip_container">
      <span className="product_status">{status}</span>
    </div>
  );
};

export default ProductStatus;
