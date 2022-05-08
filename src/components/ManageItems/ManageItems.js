import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventories from "../../Hooks/useInventories";
import { MdDeleteForever } from "react-icons/md";
import "./ManageItems.css";

const ManageItems = () => {
  const [inventories, setInventories] = useInventories();
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/service/${id}`);
  };
  const handleItemDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (proceed) {
      console.log("user deleting with id", id);
      const url = `https://appseleven.herokuapp.com/carServices/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = inventories.filter(
              (inventory) => inventory._id !== id
            );
            setInventories(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="services-container">
        {inventories.map((inventory) => (
          <div className="parent" key={inventory._id}>
            <p>
              <img src={inventory.image} alt="" />
            </p>
            <div style={{ padding: "25px" }}>
              <h2>{inventory.name}</h2>
              <h5>
                <strong>Supplier: </strong>
                {inventory.supplier}
              </h5>
              <p>
                <strong>Description: </strong>
                {inventory.description}
              </p>
              <h4>
                <strong>Quantity: </strong>
                {inventory.quantity}
              </h4>
              <p>
                <strong>Price: </strong>${inventory.price}
              </p>
              <div className="action-btn">
                <button
                  className="stock-update"
                  onClick={() => navigateToInventoryDetails(inventory._id)}
                >
                  Update
                </button>
                <MdDeleteForever
                  size={50}
                  className="delete-icon"
                  onClick={() => handleItemDelete(inventory._id)}
                >
                  Delete Item
                </MdDeleteForever>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/add">
        <button className="manage-btn">Add New Item</button>
      </Link>
    </div>
  );
};

export default ManageItems;
