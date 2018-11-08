import React, { Component } from "react";
import Aux from "../../hoc/_Aux";
import Burger from "../../components/Burger/Burger"

class BurgerBuidlder extends Component {
  state = {
     ingredients: {
       salad: 1,
       bacon: 1,
       cheese: 2,
       meat: 2
     }
  }
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurgerBuidlder;
