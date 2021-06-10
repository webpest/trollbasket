import React from "react";
import styles from "./Product.module.css";

import { ReactComponent as PopularIcon } from "assets/icons/popular-icon.svg";
import { ReactComponent as CategoriesIcon } from "assets/icons/categories-icon.svg";
import { ReactComponent as RecomendedIcon } from "assets/icons/recomended-icon.svg";
import { ReactComponent as ShopsIcon } from "assets/icons/shops-icon.svg";

const ProductMenu = () => {
  return (
    <div className={styles.product__menu}>
      <div>
        <CategoriesIcon />
        <span>Product Categories</span>
      </div>
      <div>
        <PopularIcon />
        <span>Popular Products</span>
      </div>
      <div>
        <RecomendedIcon />
        <span>Recommended Products</span>
      </div>
      <div>
        <ShopsIcon />
        <span>Shop</span>
      </div>
    </div>
  );
};

export default ProductMenu;
