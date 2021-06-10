import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCarts } from "slices/product";
import { Button } from "components";

import styles from "styles/Cart.module.css";

const Cart = () => {
  const history = useHistory();
  const carts = useSelector(selectCarts);
  const dispatch = useDispatch();
  const gotoSuccess = () => history.push("/success");
  useEffect(() => {}, []);

  return (
    <div className="page">
      <h1>Cart</h1>
      <Button block onClick={gotoSuccess}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
