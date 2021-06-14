import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import {
  fetchProducts,
  selectProducts,
  searchByName,
  searchByLocation,
  selectLocations,
} from "slices/product";
import { selectTotalItem } from "slices/cart";
import {
  BottomNav,
  ProductGrid,
  SearchBar,
  ProductMenu,
  HomeHeader,
  Swiper,
} from "components";

import styles from "styles/Buy.module.css";

const Buy = () => {
  const { filteredProduct } = useSelector(selectProducts);
  const locations = useSelector(selectLocations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(searchByName(query));
  };

  const handleFilterByLocation = (location) => {
    let query = location;
    if (location === "All") {
      query = "";
    }
    dispatch(searchByLocation(query));
  };

  const pageStyle = cn("page", { [styles.home]: true });
  const slide1 = cn({ [styles.slide]: true, [styles.slide1]: true });
  const slide2 = cn({ [styles.slide]: true, [styles.slide2]: true });
  const slide3 = cn({ [styles.slide]: true, [styles.slide3]: true });
  const totalItem = useSelector(selectTotalItem);

  return (
    <div className={pageStyle}>
      <HomeHeader
        cartQty={totalItem}
        locations={locations}
        handleFilter={handleFilterByLocation}
      />
      <section className={styles.search}>
        <div className="container">
          <SearchBar
            placeholder="Search merchbuy"
            handleSearch={handleSearch}
          />
        </div>
      </section>
      <Swiper>
        <div className={slide1}>Placeholder</div>
        <div className={slide2}>
          <span>
            Having any <span>issues</span> with your order?{" "}
          </span>
          <button>Contact Us</button>
        </div>
        <div className={slide3}>Placeholder</div>
      </Swiper>
      <main className="main">
        <div className="container">
          <ProductMenu />
          <ProductGrid products={filteredProduct} />
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Buy;
