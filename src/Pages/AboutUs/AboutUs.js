import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "../../Images/aboutUs.jpg";
const AboutUs = () => {
  const coverImg = {
    height: "400px",
    width: "620px",
    objectFit: "fill",
  };
  return (
    <div>
      <Container>
        <h2 className="bg-dark text-white text-center p-2 mt-3 ">About Us</h2>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img
              src={aboutImage}
              alt="map"
              style={coverImg}
              className="img-fluid"
            />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h4>
              “Travel is the main thing you purchase that makes you more
              extravagant”.
            </h4>
            <p>
              We, at ‘Travel Planner EU’, swear by this and put stock in
              satisfying travel dreams that make you perpetually rich
              constantly. We have been moving excellent encounters for a
              considerable length of time through our cutting-edge planned
              occasion bundles and other fundamental travel administrations.
            </p>
            <p>
              We rouse our clients to carry on with a rich life, brimming with
              extraordinary travel encounters. Through our exceptionally curated
              occasion bundles, we need to take you on an adventure where you
              personally enjoy the stunning magnificence of America and far-off
              terrains. We need you to observe sensational scenes that are a
              long way past your creative ability. The powerful inclination of
              American voyagers to travel more nowadays is something that keeps
              us inspired to satisfy our vacation necessities. Our vision to
              give you a consistent occasion encounter makes us one of the main
              visit administrators in the regularly extending travel industry.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
