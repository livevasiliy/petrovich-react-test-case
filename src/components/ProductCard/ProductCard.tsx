import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddToCart from "../AddToCart/AddToCart";
import ListUnit from "../ListUnit/ListUnit";
import ProductCounter from "../ProductCounter/ProductCounter";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductPhoto from "../ProductPhoto/ProductPhoto";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductPriceClub from "../ProductPriceClub/ProductPriceClub";
import ProductPricePoint from "../ProductPricePoint/ProductPricePoint";
import ProductStatus from "../ProductStatus/ProductStatus";
import ProductTags from "../ProductTags/ProductTags";
import ProductUnits from "../ProductUnits/ProductUnits";
import { IProductItemProps } from "../../interfaces/IProductItemProps";

const ProductCart: React.FC<IProductItemProps> = ({ product }) => {
  const status = product.isActive ? "Наличие" : "Отсутствует";

  const ext = product.primaryImageUrl.split(".").pop();
  const path = product.primaryImageUrl.replace(`.${ext}`, `_220x220_1.${ext}`);

  const [showPriceForFull, setShowPriceForFull] = useState(false);
  const [amount, setAmount] = useState(0);

  return (
    <div id={`products_section_${uuidv4()}`}>
      <div className="products_page pg_0">
        <div className="product product_horizontal">
          <span className="product_code">Код: {product.code}</span>
          <ProductStatus status={status} />
          <ProductPhoto path={path} alt={product.title} />
          <ProductDescription text={product.title} />
          <ProductTags tags={product.assocProducts.split("\n")} />
          <ProductUnits
            unitAlt={product.unitAlt}
            unitFull={product.unitFull}
            showPriceForFull={showPriceForFull}
            handleSelect={setShowPriceForFull}
          />
          <ProductPriceClub
            goldPrice={product.priceGold}
            goldPriceAlt={product.priceGoldAlt}
            showPriceForFull={showPriceForFull}
          />
          <ProductPrice
            retailPrice={product.priceRetail}
            retailPriceAlt={product.priceRetailAlt}
            showPriceForFull={showPriceForFull}
          />
          <ProductPricePoint bonusAmount={product.bonusAmount} />
          <ListUnit
            unit={product.unit}
            unitFull={product.unitFull}
            unitAlt={product.unitAlt}
            unitRatio={product.unitRatio}
          />
          <div className="product__wrapper">
            <ProductCounter amount={amount} handleAmount={setAmount} />
            <AddToCart productId={uuidv4().toString()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
