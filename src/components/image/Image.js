import React from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} className={styles.img} {...props} />;
};

export default Image;
