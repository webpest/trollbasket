import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  selectProductDetail,
  addToCart,
  selectCartQty,
} from "slices/product";
import { Header, Image, DetailBottomNav } from "components";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector(selectProductDetail);
  const cartQty = useSelector(selectCartQty);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
  };

  return (
    <div className="page">
      <Header title="Details" cartQty={cartQty} />
      <Image src={productDetail.image} />
      <h1>{productDetail.name}</h1>

      <DetailBottomNav addToCart={handleAddToCart} />
    </div>
  );
};

export default Detail;
