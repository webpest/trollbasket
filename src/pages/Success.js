import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "components";
import { ReactComponent as SuccesIcon } from "assets/icons/success-icon.svg";

const Success = () => {
  const history = useHistory();
  const goHome = () => history.push("/");

  return (
    <div className="page">
      <SuccesIcon />
      <h3>Checkout Succesful</h3>
      <p>Your checkout is now succesful.</p>
      <Button variant="secondary" block onClick={goHome}>
        Got It
      </Button>
    </div>
  );
};

export default Success;
