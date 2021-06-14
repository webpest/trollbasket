import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  fetchProducts,
  selectProductDetail,
} from "slices/product";
import { FiChevronRight } from "react-icons/fi";
import { addToCart, selectTotalItem } from "slices/cart";
import { Header, Image, DetailBottomNav } from "components";
import { formatPrice } from "utils/price-format";
import styles from "styles/Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector(selectProductDetail);
  const totalItem = useSelector(selectTotalItem);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
  };

  return (
    <div className="page">
      <Header title="Details" cartQty={totalItem} />
      <section className={styles.product__image}>
        <div className="container">
          <Image src={productDetail?.image} />
        </div>
      </section>
      <section className={styles.product__desc}>
        <div className="container">
          <h1>{productDetail?.name}</h1>
          <p>{productDetail?.description}</p>
          <p className={styles.price}>{formatPrice(productDetail?.price)}</p>
        </div>
      </section>
      <section className={styles.accordian}>
        <div className="container">
          <ul>
            <li>
              <span>Product Description</span>
              <FiChevronRight />
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.review}>
        <div className="container">3434</div>
      </section>

      <DetailBottomNav addToCart={handleAddToCart} />
    </div>
  );
};

export default Detail;
