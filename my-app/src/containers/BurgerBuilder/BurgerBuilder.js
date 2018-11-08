import React, { Component } from "react";
import Aux from "../../hoc/_Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 0.8,
  meat: 1
}
class BurgerBuidlder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2
  };
  
  addIngredient = type => {
    const prevCount = this.state.ingredients[type]
    const updatedCount = prevCount + 1
    const updatedIg = {
      ...this.state.ingredients
    }
    updatedIg[type] = updatedCount
    const addedPrice = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice + addedPrice
    this.setState({
      ingredients: updatedIg,
      totalPrice: newPrice
    })
  }

  //addIngredient = type => {
  //  this.setState(prevState => ingredients.type: prevState.ingredients.type +1 )
  //}

  removeIngredient = type => {

  }

  //removeIngredient = type => {
  // this.setState(prevSate => ingredients.type: prevState.ingredients.type - 1)
  //}

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
        />
      </Aux>
    );
  }
}

export default BurgerBuidlder;
