import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventories from "../../Hooks/useInventories";
import Banner from "./Banner/Banner";
import BuyCar from "./BuyCar/BuyCar";
import Testimonial from "./Testimonial/Testimonial";
import "./Home.css";
import Loading from "../Share/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [inventories] = useInventories();
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/service/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Banner></Banner>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="services-container">
          {inventories.slice(0, 6).map((inventory) => (
            <div className="parent" key={inventory._id}>
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
                className="stock-update"
                onClick={() => navigateToInventoryDetails(inventory._id)}
              >
                Stock Update
              </button>
            </div>
          ))}
        </div>
      )}
      <div>
        <Link to="/manage">
          <button className="manage-btn">Manage Invertories</button>
        </Link>
      </div>
      <BuyCar></BuyCar>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
