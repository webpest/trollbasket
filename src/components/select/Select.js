import React from "react";
import styles from "./Select.module.css";
import { ReactComponent as LocationIcon } from "assets/icons/location-icon.svg";

const Select = ({ options = [], handleFilter }) => {
  const handleChange = ({ target }) => {
    handleFilter(target.value);
  };
  return (
    <div className={styles.select__wrapper}>
      <span>
        <LocationIcon />
      </span>
      <select
        name="locations"
        id="locations"
        defaultValue="All"
        onChange={handleChange}
      >
        <option value="All">All</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
