import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as CartIcon } from "assets/icons/cart-icon.svg";
import { ReactComponent as OrderIcon } from "assets/icons/orders-icon.svg";
import { Select } from "components";
import styles from "./Header.module.css";

const HomeHeader = ({ cartQty, locations, handleFilter }) => {
  const history = useHistory();
  return (
    <header className={styles.header__home}>
      <div className="container">
        <h1>Trollbasket</h1>
      </div>
      <div className={styles.subheader__wrapper}>
        <div className="container">
          <div className={styles.subheader}>
            <div>
              <Select options={locations} handleFilter={handleFilter} />
            </div>
            <div>
              <button className={styles.cartBtn}>
                <OrderIcon />
              </button>
              <span>My Orders</span>
            </div>
            <div>
              <button
                onClick={() => history.push("/cart")}
                className={styles.cartBtn}
              >
                <span>{cartQty}</span>
                <CartIcon />
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
