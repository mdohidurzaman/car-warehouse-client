import React from "react";
import Services from "../Home/Services/Services";
import Banner from "./Banner/Banner";
import BuyCar from "./BuyCar/BuyCar";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <BuyCar></BuyCar>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
