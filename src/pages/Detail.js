import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectProductDetail, addToCart } from "slices/product";
import { Button } from "components";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector(selectProductDetail);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
  };

  return (
    <div className="page">
      <h1>{productDetail.name}</h1>
      <p>{id}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default Detail;
