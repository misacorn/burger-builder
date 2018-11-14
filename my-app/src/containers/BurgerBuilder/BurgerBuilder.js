import React, { Fragment, Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 0.8,
  meat: 1
};
class BurgerBuidlder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    purchasable: false,
    puschasing: false
  };

  isPurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  isPurchasing = () => {
    this.setState({ purchasing: true });
  };

  addIngredient = type => {
    const prevCount = this.state.ingredients[type];
    const updatedCount = prevCount + 1;
    const updatedIg = {
      ...this.state.ingredients
    };
    updatedIg[type] = updatedCount;
    const addedPrice = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + addedPrice;
    this.setState({
      ingredients: updatedIg,
      totalPrice: newPrice
    });
    this.isPurchasable(updatedIg);
  };

  //addIngredient = type => {
  //  this.setState(prevState => ingredients[type]: prevState.ingredients[type] +1 )
  //}

  removeIngredient = type => {
    const prevCount = this.state.ingredients[type];
    const updatedCount = prevCount - 1;
    const updatedIg = {
      ...this.state.ingredients
    };
    updatedIg[type] = updatedCount;
    console.log(updatedIg);
    const addedPrice = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - addedPrice;
    this.setState({
      ingredients: updatedIg,
      totalPrice: newPrice
    });
    this.isPurchasable(updatedIg);
  };

  //removeIngredient = type => {
  // this.setState(prevSate => ingredients[type]: prevState.ingredients[type] - 1)
  //}

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  render() {
    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.state.purchaseCancel}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          purchasable={this.state.purchasable}
          ordered={this.state.purchasing}
          price={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}

export default BurgerBuidlder;
