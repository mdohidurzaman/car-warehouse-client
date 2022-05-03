import React from "react";
import { Link, useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { inventoryid } = useParams();
  return (
    <div className="inventory-details">
      <h2>Welcome to Our Inventory: {inventoryid}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary my-5">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default InventoryDetails;
