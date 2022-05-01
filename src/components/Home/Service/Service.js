import React from "react";

const Service = ({ service }) => {
  const { name, image, description, price } = service;
  return (
    <div>
      <p>
        <img src={image} alt="" />
      </p>
      <h2>Name: {name}</h2>
      <p>
        <strong>Description:</strong>
        {description}
      </p>
      <p>
        <strong>Price:</strong>${price}
      </p>
    </div>
  );
};

export default Service;
