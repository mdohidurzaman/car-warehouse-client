import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../../images/bg1.jpg";
import "./BuyCar.css";

const BuyCar = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + bg1 + ")",
      }}
      className="buyCar-container"
    >
      <div className="buyCar-top">
        <h1 className="buyCar-heading">
          Buy <span>Car</span> Quickly and Easily
        </h1>
        <p className="section-text">
          Our service facility is independently owned and operated providing
          full-service repair and maintenance services.
        </p>
        <Link to="/manageitems">
          <button className="find-car">Find Your Car</button>
        </Link>
      </div>
      <div className="buyCar-bottom">
        <div className="single-item">
          <h3 className="buy-scope">FREE DELIVERY</h3>
          <p className="buy-text">Entire country</p>
        </div>
        <div className="single-item">
          <h3 className="buy-scope">FREE SERVICING</h3>
          <p className="buy-text">More than 2 years</p>
        </div>
        <div className="single-item">
          <h3 className="buy-scope">SECURE PAYMENT</h3>
          <p className="buy-text">Credit card payment</p>
        </div>
        <div className="single-item">
          <h3 className="buy-scope">FREE GIFTS</h3>
          <p className="buy-text">In every purchase</p>
        </div>
      </div>
    </div>
  );
};

export default BuyCar;
