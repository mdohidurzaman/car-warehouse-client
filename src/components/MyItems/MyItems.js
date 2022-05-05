import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useInventories from "../../Hooks/useInventories";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [inventories] = useInventories();
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div>
      <div className="services-container">
        {inventories
          .filter((inventory) => inventory.user === user)
          .map((myitem) => (
            <div className="parent" key={myitem._id}>
              <p>
                <img src={myitem.image} alt="" />
              </p>
              <h2>{myitem.name}</h2>
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
              <button
                className="stock-update"
                onClick={() => navigateToInventoryDetails(myitem._id)}
              >
                Stock Update
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyItems;
