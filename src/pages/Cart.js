import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCarts } from "slices/product";
import { Button } from "components";

const Cart = () => {
  const history = useHistory();
  const carts = useSelector(selectCarts);
  const gotoSuccess = () => history.push("/success");
  useEffect(() => {}, []);

  return (
    <div className="page">
      <h1>Cart</h1>
      {carts.map((cart) => {
        return <p>{cart.name}</p>;
      })}
      <Button block onClick={gotoSuccess}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;