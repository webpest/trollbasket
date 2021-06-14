import React from "react";
import styles from "./Header.module.css";
import { useHistory } from "react-router-dom";
import { FiSearch, FiChevronLeft, FiShoppingCart } from "react-icons/fi";

const Header = ({ title = "Header", hasRightAction = true, cartQty }) => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__actions}>
          <button onClick={() => history.goBack()}>
            <FiChevronLeft />
          </button>
          <h3>{title}</h3>
          <div className={styles.right__actions}>
            {hasRightAction && (
              <>
                <button>
                  <FiSearch />
                </button>
                <button
                  onClick={() => history.push("/cart")}
                  className={styles.cartBtn}
                >
                  <span>{cartQty}</span>
                  <FiShoppingCart />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
