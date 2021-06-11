import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import {
  fetchProducts,
  selectProducts,
  searchByName,
  selectCartQty,
} from "slices/product";
import {
  BottomNav,
  ProductGrid,
  SearchBar,
  ProductMenu,
  HomeHeader,
} from "components";

import styles from "styles/Buy.module.css";

const Buy = () => {
  const { filteredProduct } = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(searchByName(query));
  };

  const pageStyle = cn("page", { [styles.home]: true });
  const cartQty = useSelector(selectCartQty);

  return (
    <div className={pageStyle}>
      <HomeHeader cartQty={cartQty} />
      <main className="main">
        <div className="container">
          <SearchBar
            placeholder="Search merchbuy"
            handleSearch={handleSearch}
          />
          <ProductMenu />
          <ProductGrid products={filteredProduct} />
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Buy;
