import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Details from './DishDetails';
import Header from './HeaderComponent';
import { DISHES } from "../Share/dishes";
import { COMMENTS } from "../Share/comments";
import { LEADERS } from "../Share/Leaders";
import { PROMOTIONS } from "../Share/pormotion"
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactHome';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        const DishWithId = ({ match }) => {
            return (
                <Details dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))} 
                />

            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact pasth="/contactus" component={Contact} />
                    <Redirect to="home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
