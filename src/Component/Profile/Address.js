import React from 'react';
import "./Address.css";
import {FaGithub,FaEnvelope,FaMapMarkerAlt,FaPhoneSquareAlt} from "react-icons/fa";
import {IconContext} from 'react-icons';
const Address =() => {
    return (
    <IconContext.Provider value ={{color:"blue", size:"1.5em" ,}}>
        <div className="container">
        <div className="row">
            <div className="col">
            <h4> CONTACT ME </h4>
            <ul className="list-unstyled">
                <li> <FaPhoneSquareAlt/>Phone : +216-92-065980</li>
                <li><FaMapMarkerAlt/>GAFSA-TUNISIA
                Main street</li>
            </ul>
            </div>
            <div className="col">
                <ul className="list-unstyled">
                    <br/>
                <li> <FaEnvelope/>Send me a message  </li>
                <li> <FaGithub/>Check out my GitHub </li>
                <br/>
            </ul>
            </div>
        </div>
    <br/>
        </div>
        </IconContext.Provider>
    )
}
export default Address
