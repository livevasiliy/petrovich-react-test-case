import React, { useEffect, useState } from "react";
import ProductCart from "./components/ProductCard/ProductCard";
import fetchedProducts from "./products.json";
import Product from "./models/Product";
import EmptyProducts from "./components/EmptyProducts/EmptyProducts";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    return setProducts(fetchedProducts);
  }, []);
  return (
    <main className="grid container">
      <div className="sub_category_page">
        <div className="column_right column_right_products_container">
          <div className="product__area">
            {products.length ? (
              products.map((product: Product, index: number) => {
                return <ProductCart product={product} key={index} />;
              })
            ) : (
              <EmptyProducts />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
