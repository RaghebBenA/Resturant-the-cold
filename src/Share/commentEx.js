import React from "react";
import {COMMENT }from './comments'

const COMMENTS = (props) =>{
    COMMENT.map((comment) => {
        return (
            <div key={comment.id} className=" col-12 col-md-5 m-1" >
                <h4>Comments</h4>
                <p>{comment.comment}</p>
                <p>{comment.autor}</p>
            </div>
        )
    })
}

export default COMMENTS