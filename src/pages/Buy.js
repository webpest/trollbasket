import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts, searchByName } from "slices/product";
import {
  Button,
  BottomNav,
  ProductGrid,
  SearchBar,
  ProductMenu,
} from "components";

const Buy = () => {
  const { filteredProduct } = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(searchByName(query));
  };

  return (
    <div className="page">
      <main className="main">
        <div className="container">
          <SearchBar
            placeholder="Search merchbuy"
            handleSearch={handleSearch}
          />
          <ProductMenu />
          <ProductGrid products={filteredProduct} />
          <Button block>Buy</Button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Buy;
