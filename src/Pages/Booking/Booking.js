import React from "react";
import { Card, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdMoney as Price, MdOutlineReviews as Review } from "react-icons/md";
import { AiOutlineStar as Star } from "react-icons/ai";
import { BsBookmarkCheck as Check } from "react-icons/bs";
import { GrLocation as Destination, GrMapLocation } from "react-icons/gr";

const Booking = ({ booking }) => {
  const cardImg = {
    height: "200px",
    width: "286px",
  };
  const {
    _id,
    destination,
    city,
    country,
    price,
    image,
    rating,
    number_of_reviews,
  } = booking;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card style={{ width: "18rem" }} className="mt-3 g-2 mx-auto">
        <Card.Img
          variant="top"
          src={image}
          style={cardImg}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>
            <Destination className="me-1" size="1.5em"></Destination>
            {destination}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {" "}
            <GrMapLocation className="me-1" size="1.5em" />
            {city}, {country}
          </ListGroupItem>
          <ListGroupItem>
            <Price className="me-1" size="1.5em" />${price} approx.
          </ListGroupItem>
          <ListGroupItem>
            <Star className="me-1" size="1.5em" />
            {rating}/5.0, {number_of_reviews} reviews.
          </ListGroupItem>
          <ListGroupItem>
            <Review className="me-1" size="1.5em" />
            {number_of_reviews} reviews.
          </ListGroupItem>
          <ListGroupItem>
            {/* <div className="d-flex justify-content-center">
                    <Link to={`/bookings/${_id}`}>
                      <Button variant="success" className="text-light">
                        <Check /> Book Now
                      </Button>
                    </Link>
                  </div> */}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default Booking;
