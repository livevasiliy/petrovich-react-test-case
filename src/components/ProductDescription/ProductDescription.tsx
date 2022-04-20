import React from "react";
import { IProductDescriptionProps } from "../../interfaces/IProductDescriptionProps";

const ProductDescription: React.FC<IProductDescriptionProps> = ({ text }) => {
  return (
    <div className="product_description">
      <a href="#!" className="product__link">
        {text}
      </a>
    </div>
  );
};

export default ProductDescription;
