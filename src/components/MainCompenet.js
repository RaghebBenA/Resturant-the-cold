import React, { Component } from 'react';
import Menu from './MenuComponent';
import Details from './DishDetails';
import Header from './HeaderComponent';
import { DISHES } from "../Share/dishes";
import Footer from './FooterComponent';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            dishes: DISHES,
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
         <Header />
                <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />
                <Details
                    dish={this.state.dishes.filter(dish => { return dish.id === this.state.selectedDish })[0]}
                />
           <Footer />
            </div>
        );
    }
}

export default Main;
