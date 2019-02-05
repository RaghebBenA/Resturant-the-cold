import React, { Component } from 'react';
import {CardText, CardBody, Card, CardImg, CardTitle} from "reactstrap";
class Details extends Component {
    constructor(){
        super()
        this.state={
            COMMENT: []
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/comments?id=1&id=2')
  .then(response => response.json())
    .then(json=>{
        const Comment = json.map((comment)=>{
            return (
                <ul className="list-unstyled" key={comment.id}
                  onClick={()=>this.props.click}>
                <li>--- {comment.name}</li>
                <li>** {comment.body}</li>
                </ul>
            )
        })
        this.setState({
            COMMENT: Comment
        })
    })
}
 renderComment(comment ){
     if(comment != null ){
         return (
             <div>
             <h4>Comments</h4>
             {this.state.COMMENT}
             </div>
         )
     }else {
         return (
             <div></div>
         )
     }
 }

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
   <div className="row">
   <div className="col">{this.renderDish(this.props.selectedDish)}</div>
  <div className="col">{this.renderComment(this.props.selectedDish)}</div> 
   </div>
    
)
    }
}

export default Details ;