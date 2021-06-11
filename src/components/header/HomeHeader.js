import React from "react";
import { useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Header.module.css";

const HomeHeader = ({ cartQty }) => {
  const history = useHistory();
  return (
    <header className={styles.header__home}>
      <div className="container">
        <h1>Trollbasket</h1>
      </div>
      <div className={styles.subheader__wrapper}>
        <div className="container">
          <div className={styles.subheader}>
            <div>1</div>
            <div>
              <span>My Orders</span>
            </div>
            <div>
              <button
                onClick={() => history.push("/cart")}
                className={styles.cartBtn}
              >
                <span>{cartQty}</span>
                <FiShoppingCart />
              </button>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
