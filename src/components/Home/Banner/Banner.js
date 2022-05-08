import { Carousel } from "react-bootstrap";
import React from "react";
import slide1 from "../../../images/slide1.jpg";
import slide5 from "../../../images/slide5.jpg";
import slide4 from "../../../images/slide4.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption className="carosel-heading">
          <h1>
            <span className="heading-thin"> UNLOCK</span>
            <br />
            <span className="heading-lightblue"> THE POTENTIAL</span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide5} alt="Second slide" />

        <Carousel.Caption className="carosel-heading">
          <h1>
            <span className="heading-thin"> REALITY IS JUST</span>
            <br />
            <span className="heading-blue"> YOUR PERCEPTION</span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide4} alt="Third slide" />

        <Carousel.Caption className="carosel-heading">
          <h1>
            <span className="heading-thin">DOMINATE YOUR LIFE</span>
            <br />
            <span className="heading-red">WITH THE BEST CAR</span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
