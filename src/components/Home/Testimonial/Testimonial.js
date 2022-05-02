import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonial.css";
import sliderbg from "../../../images/sliderbg.jpg";
import testimonial1 from "../../../images/testimonials1.jpg";
import testimonial2 from "../../../images/testimonials2.jpg";
import testimonial3 from "../../../images/testimonials3.jpg";
import testimonial4 from "../../../images/testimonials4.jpg";

const Testimonial = () => {
  return (
    <div>
      <p className="heading-top">What Our Happy Clients say about us</p>
      <h1 className="heading-bottom">OUR TESTIMONIAL</h1>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img className="slider-img mb-4" src={testimonial1} alt="" />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                For those of you who are serious about having more, doing more,
                giving more and being more, success is achievable with some
                understanding really no magic.
              </p>
              <h5>JONNA WILLIAMS</h5>
              <p className="degingnation">CUSTOMER</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img className="slider-img mb-4" src={testimonial2} alt="" />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                The first thing to remember about success is that it is a
                process – nothing more, nothing less. There is really no magic
                to it and it’s not reserved only for a select.
              </p>
              <h5>MICHEL BEAN</h5>
              <p className="degingnation">AUTO DEALER</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img className="slider-img mb-4" src={testimonial3} alt="" />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                Making a decision to do something – this is the first step. We
                all know that nothing moves until someone makes a decision. The
                first action is always
              </p>
              <h5>FELICIA QUEEN</h5>
              <p className="degingnation">BUSSINESS MAN</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img className="slider-img mb-4" src={testimonial4} alt="" />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                Making a decision to do something – this is the first step. We
                all know that nothing moves until someone makes a decision. The
                first action is always.
              </p>
              <h5>MELISSA DOE</h5>
              <p className="degingnation">BANKER</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonial;
