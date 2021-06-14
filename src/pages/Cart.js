import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  selectCarts,
  removeFromCart,
  increaseQty,
  decreaseQty,
  selectTotalCost,
} from "slices/cart";
import { selectProducts } from "slices/product";
import { formatPrice } from "utils/price-format";
import { Button, Header, CartItem, ProductGrid } from "components";

import styles from "styles/Cart.module.css";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const carts = useSelector(selectCarts);
  const totalCost = useSelector(selectTotalCost);
  const gotoSuccess = () => history.push("/success");
  const { filteredProduct } = useSelector(selectProducts);
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
      <section className={styles.total__box}>
        <div className="container">
          <ul className={styles.total__list}>
            <li>
              <span>Subtotal</span>
              <span>{formatPrice(totalCost)}</span>
            </li>
            <li>
              <span>Total</span>
              <span className={styles.total__cost}>
                {formatPrice(totalCost)}
              </span>
            </li>
            <li>
              <Button block onClick={gotoSuccess}>
                Checkout
              </Button>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.recently_viewed}>
        <div className="container">
          <ul className={styles.recently__list}>
            <li>
              <span>Recently Viewd</span>
              <span>
                <Link>View All</Link>
              </span>
            </li>
            <li>
              <ProductGrid products={filteredProduct} />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Cart;
