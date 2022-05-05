import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://appseleven.herokuapp.com/carServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <h1 className="services-heading">Our Warehouse Cars</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div>
        <Link to="/add">
          <button className="manage-btn">Add New Item</button>
        </Link>
      </div>
    </>
  );
};

export default Services;
