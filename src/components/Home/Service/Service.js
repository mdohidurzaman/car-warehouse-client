import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, image, description, price } = service;
  return (
    <div className="service-container">
      <p>
        <img src={image} alt="" />
      </p>
      <h2>{name}</h2>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Price: </strong>${price}
      </p>
    </div>
  );
};

export default Service;
