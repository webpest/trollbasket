import React from "react";
import { Button } from "components";

import styles from "./BottomNav.module.css";

const DetailBottomNav = ({ addToCart }) => {
  return (
    <footer className={styles.detail__nav}>
      <div className="container">
        <div className={styles.actions}>
          <Button onClick={addToCart}>Add to cart</Button>
          <Button outline>Wishlist</Button>
        </div>
      </div>
    </footer>
  );
};

export default DetailBottomNav;
