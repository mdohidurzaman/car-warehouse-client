import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { MdDeleteForever } from "react-icons/md";
import useInventories from "../../Hooks/useInventories";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
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
        {inventories
          .filter((inventory) => inventory.email === user.email)
          .map((myitem) => (
            <div className="parent" key={myitem._id}>
              <p>
                <img src={myitem.image} alt="" />
              </p>
              <div style={{ padding: "25px" }}>
                <h2>{myitem.name}</h2>
                <h5>
                  <strong>Supplier: </strong>
                  {myitem.supplier}
                </h5>
                <p>
                  <strong>Description: </strong>
                  {myitem.description}
                </p>
                <h4>
                  <strong>Quantity: </strong>
                  {myitem.quantity}
                </h4>
                <p>
                  <strong>Price: </strong>${myitem.price}
                </p>
                <div className="action-btn">
                  <button
                    className="stock-update"
                    onClick={() => navigateToInventoryDetails(myitem._id)}
                  >
                    Update
                  </button>
                  <MdDeleteForever
                    size={50}
                    className="delete-icon"
                    onClick={() => handleItemDelete(myitem._id)}
                  ></MdDeleteForever>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyItems;
