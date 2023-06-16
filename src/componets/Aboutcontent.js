import "./Aboutcontentstyles.css"

import React from 'react'
import { Link } from 'react-router-dom';
import react1 from "../assets/react1.avif"
import react2 from "../assets/react2.avif"

const Aboutcontent = () => {
    return (
        <div className="about">
            <div className="left">
            <h1>Who am I?</h1>
            <p>i create responsive websites</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={react2} className="img" alt="true" />
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Aboutcontent