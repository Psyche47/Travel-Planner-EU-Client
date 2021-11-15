import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
} from "react-bootstrap";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { MdMoney as Price, MdOutlineReviews as Review } from "react-icons/md";
import { AiOutlineStar as Star } from "react-icons/ai";
import { GrLocation as Destination, GrMapLocation } from "react-icons/gr";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Bookings = () => {
  const { user } = useAuth();
  //const [services] = useServices();
  const { id } = useParams();
  const [singleService, setSingleService] = useState({});
  const history = useHistory();
  const redirect_uri = "/services";
  const cardImg = {
    height: "200px",
    width: "286px",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://protected-cliffs-47621.herokuapp.com/singleService/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);

  const onSubmit = (data) => {
    data.destination = singleService?.destination;
    data.city = singleService?.city;
    data.country = singleService?.country;
    data.price = singleService?.price;
    data.image = singleService?.image;
    data.rating = singleService?.rating;
    data.number_of_reviews = singleService?.number_of_reviews;
    data.status = "pending";
    fetch("https://protected-cliffs-47621.herokuapp.com/confirmedBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.insertedId) {
          alert("Service booked successfully.");
          history.push(redirect_uri);
        }
      });
    console.log(data);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} md={5} sm={12}>
            <Card style={{ width: "18rem" }} className="mt-3 g-2 mx-auto">
              <Card.Header className="text-center">
                Book your trip now!
              </Card.Header>
              <Card.Img
                variant="top"
                src={singleService.image}
                style={cardImg}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>
                  <Destination className="me-1" size="1.5em"></Destination>
                  {singleService.destination}
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  {" "}
                  <GrMapLocation className="me-1" size="1.5em" />
                  {singleService.city}, {singleService.country}
                </ListGroupItem>
                <ListGroupItem>
                  <Price className="me-1" size="1.5em" />${singleService.price}{" "}
                  approx.
                </ListGroupItem>
                <ListGroupItem>
                  <Star className="me-1" size="1.5em" />
                  {singleService.rating}/5.0, {singleService.number_of_reviews}{" "}
                  reviews.
                </ListGroupItem>
                <ListGroupItem>
                  <Review className="me-1" size="1.5em" />
                  {singleService.number_of_reviews} reviews.
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={9} md={7} sm={12}>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-dark rounded mt-3 w-75 p-3 mx-auto"
            >
              <h2 className="text-center text-info bg-dark rounded p-2 w-75 mx-auto">
                Confirm Your Booking
              </h2>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name", { required: true })}
                  defaultValue={user?.displayName}
                />
                <Form.Text className="text-muted">
                  {errors.name && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  {...register("email")}
                  defaultValue={user?.email}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  {...register("destination")}
                  defaultValue={singleService?.destination}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  {...register("city")}
                  defaultValue={singleService?.city}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  {...register("country")}
                  defaultValue={singleService?.country}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Cost of Trip</Form.Label>
                <Form.Control
                  type="text"
                  {...register("price")}
                  defaultValue={singleService?.price}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control
                  type="date"
                  {...register("date", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.date && (
                    <h5 className="text-danger mt-1">Please pick a date.</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mt-2 w-75 mx-auto">
                <input type="submit" className="btn btn-success me-4" />
                <Link to="/services">
                  <input
                    type="submit"
                    value="Other Services"
                    className="btn btn-info me-2"
                  />
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bookings;
