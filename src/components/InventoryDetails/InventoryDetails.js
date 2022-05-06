import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryDetails.css";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const url = `https://appseleven.herokuapp.com/carServices/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id, inventory]);

  const handleDelevered = () => {
    const quantity = inventory.quantity - 1;

    //send data to server
    const url = `https://appseleven.herokuapp.com/carServices/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Your data is successfuly updated!!");
      });
  };

  const handleAddInventory = (event) => {
    event.preventDefault();
    const inputQuantity = event.target.number.value;
    const dataQuantity = inventory.quantity;
    const newQuantity = parseInt(inputQuantity) + parseInt(dataQuantity);
    const increaseInventory = { newQuantity };

    //Send data to the server
    const url = `https://appseleven.herokuapp.com/carServices/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(increaseInventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        alert("Your quantity is successfuly updated!!");
        event.target.reset();
      });
  };

  return (
    <div className="mt-5">
      <div className="inventory-details">
        <p>
          <img src={inventory.image} alt="" />
        </p>
        <h2>{inventory.name}</h2>
        <p>
          <strong>Description:</strong>
          {inventory.description}
        </p>
        <h4>
          Quantity:
          {inventory.quantity}
        </h4>
        <p>
          <strong>Price: $</strong>
          {inventory.price}
        </p>
      </div>
      <Link to="#">
        <button
          onClick={() => handleDelevered(inventory._id)}
          className="manage-btn"
        >
          Delivered
        </button>
      </Link>
      <div className="stock-form">
        <h2 className="form-heading">Restock Invertory</h2>
        <form onSubmit={handleAddInventory}>
          <input
            required
            type="number"
            name="number"
            id=""
            placeholder="Re-stock quantity"
          />
          <button className="stock-btn">Re-Stock</button>
        </form>
      </div>
      <div>
        <Link to="/manage">
          <button className="manage-btn">Manage Invertories</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryDetails;
