import React from "react";
import { ProductItem } from "components";
import styles from "./Product.module.css";

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.product__grid}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
