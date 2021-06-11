import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectCarts,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "slices/product";
import { Button, Header, CartItem } from "components";

import styles from "styles/Cart.module.css";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const carts = useSelector(selectCarts);
  const gotoSuccess = () => history.push("/success");
  useEffect(() => {}, []);

  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQty(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQty(item));
  };

  return (
    <div className="page">
      <Header title="Cart" hasRightAction={false} />
      <section className={styles.cartitem__section}>
        <div className="container">
          {carts.map((cart) => (
            <CartItem
              key={cart.id}
              item={cart}
              deleteItem={handleDeleteItem}
              increaseItem={handleIncrease}
              decreaseItem={handleDecrease}
            />
          ))}
        </div>
      </section>

      <Button block onClick={gotoSuccess}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
