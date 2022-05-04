import React from "react";
import { Form } from "react-bootstrap";
import "./AddService.css";

const AddService = () => {
  const handleAddInventory = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const supplier = event.target.supplier.value;
    const inventory = { name, price, quantity, image, supplier, description };

    //Send data to the server
    fetch("http://localhost:5000/car-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
    <div className="contianer w-50 mx-auto login-form">
      <h2>Please add a inventory</h2>
      <Form onSubmit={handleAddInventory}>
        <input type="text" name="name" id="" placeholder="Name" />

        <input type="text" name="supplier" id="" placeholder="Supplier" />

        <input type="number" name="price" id="" placeholder="Price" />

        <input type="number" name="quantity" id="" placeholder="Quantity" />
        <input type="text" name="image" id="" placeholder="Picture" />
        <textarea
          type="message"
          name="description"
          placeholder="Description"
        ></textarea>

        <input type="submit" value="Add inventory" />
      </Form>
    </div>
  );
};

export default AddService;
