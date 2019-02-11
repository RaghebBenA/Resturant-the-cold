import React from "react";
import {Link} from "react-router-dom";


const Footer = (props) => {

    return(
        <div className="footer">
            <div className="container">
                <div className="row ">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="menu">Menu</Link></li>
                            <li><Link to="contactus">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2019 Restaurant The Gold</p>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Footer;