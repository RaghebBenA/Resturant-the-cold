import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Details from './DishDetails';
import { DISHES } from "../Share/dishes"


class Main extends Component {
  constructor(){
    super()
    this.state ={
      dishes : DISHES,
      selectedDish: null
    }
  }
  onDishSelect(dishID) {
    this.setState({
        selectedDish: dishID
    })
}
  render() {
    return (
      <div>
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />
        <Details 
        dish={this.state.dishes.filter(dish => { return dish.id === this.state.selectedDish })[0]}
        />
       
      </div>
    );
  }
}

export default Main;
