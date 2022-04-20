import React from "react";
import { IProductPhoto } from "../../interfaces/IProductPhoto";

const ProductPhoto: React.FC<IProductPhoto> = ({path, alt}) => {
  return (
    <div className="product_photo">
      <a href="#!" className="url--link product__link">
        <img src={path} alt={alt} />
      </a>
    </div>
  );
}

export default ProductPhoto;
