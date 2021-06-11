import React from "react";
import { Image } from "components";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const CartItem = ({ item, deleteItem, increaseItem, decreaseItem }) => {
  return (
    <div className={styles.cartitem}>
      <header>
        <Image src={item.image} />
        <div>
          <Link to={`/product-detail/${item.id}`}>{item.name}</Link>
          <p>{item.price}</p>
        </div>
      </header>
      <footer>
        <button onClick={() => deleteItem(item)}>Delete</button>
        <div>
          <button onClick={() => decreaseItem(item)}>-</button>
          <h3>{item.quantity}</h3>
          <button onClick={() => increaseItem(item)}>+</button>
        </div>
      </footer>
    </div>
  );
};

export default CartItem;
