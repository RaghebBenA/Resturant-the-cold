import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from "./Share/dishes"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      dishes : DISHES
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
