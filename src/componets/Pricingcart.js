import "./Pricingcartstyles.css"

import React from 'react'
import { Link } from 'react-router-dom';

const Pricingcart = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p>- 3 days -</p>
                <p>- 3 pages -</p>
                <p>- featured -</p>
                <p>- responsive design -</p>
                <Link to="/contact" className="btn">
                    purchase now
                </Link>
            </div>

            <div className="card">
            <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$200</p>
                <p>- 5 days -</p>
                <p>- 7 pages -</p>
                <p>- featured -</p>
                <p>- responsive design -</p>
                <Link to="/contact" className="btn">
                    purchase now
                </Link>
            </div>

            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$300</p>
                <p>- 7 days -</p>
                <p>- 10 pages -</p>
                <p>- featured -</p>
                <p>- responsive design -</p>
                <Link to="/contact" className="btn">
                    purchase now
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Pricingcart