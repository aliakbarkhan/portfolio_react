import "./Heroimgstyles.css"
import React from 'react'
import intro from "../assets/intro.jpg";
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={intro} />
      </div>
      <div className="content">
        <p>Hi im free lancer</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" 
          className="btn">Projects</Link>
          <Link to="/contact" 
          className="btn btn-light ">Contact</Link>
        </div>

      </div>
    </div>
  )
}

export default Heroimg