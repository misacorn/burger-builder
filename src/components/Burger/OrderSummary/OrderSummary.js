import React, { Fragment, Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const igSummary = Object.keys(this.props.ingredients).map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {this.props.ingredients[igKey]}
      </li>
    ));
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>Your burger with following ingredients:</p>
        <ul>{igSummary}</ul>
        <p>
          <strong>Total price: {this.props.price} euros</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
