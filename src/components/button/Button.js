import React from "react";
import styles from "./Button.module.css";
import classnames from "classnames";

const Button = ({
  children,
  variant = "primary",
  outline,
  block,
  ...props
}) => {
  const btnClass = classnames(styles.btn, {
    [styles.btn__primary]: variant === "primary",
    [styles.btn__secondary]: variant === "secondary",
    [styles.btn__outline]: outline,
    [styles.btn__block]: block,
  });

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
