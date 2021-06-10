import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";

const SearchBar = ({ placeholder, handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={query}
      />
      <button onClick={() => handleSearch(query)}>
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
