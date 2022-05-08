import React from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./AddService.css";

const AddService = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const handleAddInventory = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const supplier = event.target.supplier.value;
    const inventory = {
      name,
      email,
      price,
      quantity,
      image,
      supplier,
      description,
    };

    //Send data to the server
    const url = `https://appseleven.herokuapp.com/carServices?email=${email}`;
    fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
    alert("Your inventory is added successfuly");
    event.target.reset();
  };
  return (
    <div className="contianer w-40 mx-auto login-form">
      <h2 style={{ color: "orange", marginBottom: "50px", fontSize: "50px" }}>
        Please add a inventory
      </h2>
      <Form onSubmit={handleAddInventory}>
        <input type="text" name="name" id="" placeholder="Name" required />
        <input type="email" name="email" id="" placeholder="Email" />

        <input type="text" name="supplier" id="" placeholder="Supplier" />

        <input type="number" name="price" id="" placeholder="Price" />

        <input type="number" name="quantity" id="" placeholder="Quantity" />
        <input type="text" name="image" id="" placeholder="Picture" />
        <textarea
          type="message"
          name="description"
          placeholder="Description"
        ></textarea>

        <button
          style={{
            backgroundColor: "orange",
            color: "#fff",
            border: "0",
            fontSize: "18px",
          }}
          className="py-2 px-5"
        >
          Add Inventory
        </button>
      </Form>
    </div>
  );
};

export default AddService;
