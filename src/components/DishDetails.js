import React, { Component } from 'react';
import {CardText, CardBody, Card, CardImg, CardTitle} from "reactstrap";

class Details extends Component {
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    render(){
return (
    <div className= "col-12 col-md-5 m-1">
    {this.renderDish(this.props.selectedDish)}
    </div>
)
    }
}

export default Details ;