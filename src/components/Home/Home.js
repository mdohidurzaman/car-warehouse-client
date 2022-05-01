import React from "react";
import Services from "../Home/Services/Services";
import Banner from "./Banner/Banner";
import BuyCar from "./BuyCar/BuyCar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <BuyCar></BuyCar>
    </div>
  );
};

export default Home;
