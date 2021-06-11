import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "components";
import { ReactComponent as SuccesIcon } from "assets/icons/success-icon.svg";
import cn from "classnames";
import styles from "styles/Success.module.css";

const Success = () => {
  const history = useHistory();
  const goHome = () => history.push("/");
  const pageStyle = cn("page", { [styles.success]: true });
  return (
    <div className={pageStyle}>
      <div className="container">
        <div className={styles.content}>
          <SuccesIcon />
          <h3>Checkout Succesful</h3>
          <p>Your checkout is now succesful.</p>
        </div>
        <Button variant="secondary" block onClick={goHome}>
          Got It
        </Button>
      </div>
    </div>
  );
};

export default Success;
