import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, image, description, price, quantity } = service;
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <div>
        <p>
          <img src={image} alt="" />
        </p>
        <h2>{name}</h2>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
        <h4>
          <strong>Quantity: </strong>
          {quantity}
        </h4>
        <p>
          <strong>Price: </strong>${price}
        </p>
        <button
          className="stock-update"
          onClick={() => navigateToInventoryDetails(_id)}
        >
          Stock Update
        </button>
      </div>
    </div>
  );
};

export default Service;
