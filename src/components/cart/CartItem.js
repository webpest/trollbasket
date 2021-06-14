import React from "react";
import { Image } from "components";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import styles from "./Cart.module.css";
import { formatPrice } from "utils/price-format";

const CartItem = ({ item, deleteItem, increaseItem, decreaseItem }) => {
  return (
    <div className={styles.cartitem}>
      <header>
        <Image src={item.image} />
        <div className={styles.desc}>
          <Link to={`/product-detail/${item.id}`}>{item.name}</Link>
          <p>{formatPrice(item.price)}</p>
        </div>
      </header>
      <footer>
        <button className={styles.delete__btn} onClick={() => deleteItem(item)}>
          <DeleteIcon />
          Delete
        </button>
        <div>
          <button
            className={styles.round__btn}
            onClick={() => decreaseItem(item)}
          >
            -
          </button>
          <h3 className={styles.qty}>{item.quantity}</h3>
          <button
            className={styles.round__btn}
            onClick={() => increaseItem(item)}
          >
            +
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CartItem;
