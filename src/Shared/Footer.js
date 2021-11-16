import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiFacebook, SiTwitter, SiYoutube } from "react-icons/si";
import { NavLink } from "react-router-dom";
import logo from "./../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  const activeStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "large",
    marginLeft: "5px",
  };
  return (
    <footer>
      <div className="bg-dark">
        <Container>
          <Row className="bg-dark text-white p-2 mt-2">
            <Col className="d-flex align-items-center">
              <img src={logo} alt="" className="flag-img" />
              <NavLink to="/home" style={activeStyle}>
                Travel Planner EU
              </NavLink>
            </Col>
            <Col className="ms-4">
              <h5 className="link-heading">Useful Links</h5>
              <div className="link-container">
                <NavLink to="/services" className="active">
                  All Our Services
                </NavLink>
                <NavLink to="/myBookings" className="active">
                  All Booked Trips
                </NavLink>
                <NavLink to="/home" className="active">
                  Home
                </NavLink>
              </div>
            </Col>
            <Col>
              <h5 className="link-heading">Contact Us</h5>
              <div className="d-flex flex-column">
                <div>
                  <SiFacebook size={30}></SiFacebook>
                  <a
                    href="https://www.facebook.com/travelplannerbangladesh"
                    target="_blank"
                    rel="noreferrer"
                    className="active-social"
                  >
                    Facebook
                  </a>
                </div>
                <div className="mt-2">
                  <SiYoutube size={30}></SiYoutube>
                  <a
                    href="https://www.youtube.com/watch?v=-r4ZBVPfjAU"
                    target="_blank"
                    rel="noreferrer"
                    className="active-social"
                  >
                    Youtube
                  </a>
                </div>
                <div className="mt-2">
                  <SiTwitter size={30}></SiTwitter>
                  <a
                    href="https://twitter.com/TravellPlanner"
                    target="_blank"
                    rel="noreferrer"
                    className="active-social"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <h5 className="link-heading">Subscribe to our Newsletter</h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button type="button" className="btn btn-secondary">
                  Subscribe
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
