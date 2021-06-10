import React from "react";
import { FiHome, FiTag, FiPackage, FiPocket, FiMenu } from "react-icons/fi";
import styles from "./BottomNav.module.css";

const BottomNav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <FiHome />
          <span>Home</span>
        </li>
        <li className={styles.active}>
          <FiPackage />
          <span>Buy</span>
        </li>
        <li>
          <FiTag />
          <span>Deals</span>
        </li>
        <li>
          <FiPocket />
          <span>Wallet</span>
        </li>
        <li>
          <FiMenu />
          <span>More</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
