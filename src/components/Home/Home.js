import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventories from "../../Hooks/useInventories";
import Banner from "./Banner/Banner";
import BuyCar from "./BuyCar/BuyCar";
import Testimonial from "./Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  const [inventories] = useInventories();
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div>
      <Banner></Banner>
      <div className="services-container">
        {inventories.slice(0, 6).map((inventory) => (
          <div className="parent">
            <p>
              <img src={inventory.image} alt="" />
            </p>
            <h2>{inventory.name}</h2>
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
            <button
              className="btn btn-primary"
              onClick={() => navigateToInventoryDetails(inventory._id)}
            >
              Stock Update
            </button>
          </div>
        ))}
        <div>
          <Link to="/manage">
            <button>Manage Invertories</button>
          </Link>
        </div>
      </div>
      <BuyCar></BuyCar>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
