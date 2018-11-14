import React, {Fragment} from "react";

const orderSummary = props => {
  const igSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Your burger with following ingredients:</p>
      <ul>{igSummary}</ul>
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

export default orderSummary;
