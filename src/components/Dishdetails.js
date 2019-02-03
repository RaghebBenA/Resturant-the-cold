import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class Dishdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedComment: null
        }
    }
    OnCommentSelect(comment) {
        this.setState({
            selectedComment: comment
        })
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className=" col-12 col-md-5 m-1" >
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    renderComment(comment) {
        if (comment != null) {
            return (
            
 this.props.comments.map((comment) => {
    return (
        <div key={comment.id} className=" col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            <p>{comment.comment}</p>
            <p>{comment.autor}</p>
        </div>
            )
        })
            )
    }
        else {
            return (
                <div></div>
            )
        }
    }
    render() {

        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComment(this.props.selectedDish)}
            </div>
        )
    }
}
export default Dishdetails;