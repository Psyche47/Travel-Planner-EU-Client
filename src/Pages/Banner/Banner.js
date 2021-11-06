import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Banner = () => {
  const imgGermany1 = "https://i.ibb.co/M76v0Cr/Germany.jpg";
  const imgGermany2 = "https://i.ibb.co/tpkRQr5/Germany2.jpg";
  const imgSwitzerland = "https://i.ibb.co/pPvCKMM/Switzerland.jpg";
  const imgPoland = "https://i.ibb.co/VqC6X7S/Poland.png";
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item className="carousel-banner" interval={2000}>
          <img className="d-block w-100" src={imgGermany2} alt="First slide" />
          <Carousel.Caption>
            <h1 className="text-info bg-dark rounded p-2">
              Travel Planner Europe
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner" interval={2000}>
          <img className="d-block w-100" src={imgGermany1} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-info bg-dark rounded p-2">
              Plan Your Next Trip With Us
            </h3>
            <Link to="/services">
              <Button variant="info">View All Our Services</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner" interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src={imgSwitzerland}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4 className="text-info bg-dark rounded p-2">
              We're Arranging Trips Since 2012
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner" interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src={imgPoland}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/FAQ">
              <Button variant="info">View Frequently Asked Questions</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
