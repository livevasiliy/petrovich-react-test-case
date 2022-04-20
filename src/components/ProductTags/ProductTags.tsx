import React from "react";
import { IProductTagsProps } from "../../interfaces/IProductTagsProps";

const ProductTags: React.FC<IProductTagsProps> = ({ tags }) => {
  return (
    <div className="product_tags hidden-sm">
      <p>Могут понадобиться:&nbsp;</p>
      {tags.map((tag: string, index: number) => {
        return (
          <a href="#!" className="url--link" key={index}>
            {tag}
          </a>
        );
      })}
    </div>
  );
};

export default ProductTags;
