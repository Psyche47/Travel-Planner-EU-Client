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
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";
import { MdMoney as Price, MdOutlineReviews as Review } from "react-icons/md";
import { AiOutlineStar as Star } from "react-icons/ai";
import { GrLocation as Destination, GrMapLocation } from "react-icons/gr";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Bookings = () => {
  const { user } = useAuth();
  const [services] = useServices();
  const { id } = useParams();
  const [singleService, setSingleService] = useState({});
  const cardImg = {
    height: "200px",
    width: "286px",
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.insertedId) {
          alert("Service added successfully.");
          reset();
        }
      });
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
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  {...register("destination", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.destination && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  {...register("city", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.city && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  {...register("country", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.country && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Cost of Trip</Form.Label>
                <Form.Control
                  type="text"
                  {...register("price", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.price && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Image Link</Form.Label>
                <Form.Control
                  type="url"
                  {...register("image", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.image && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Rating out of 5</Form.Label>
                <Form.Control
                  type="number"
                  step="any"
                  {...register(
                    "rating",
                    { required: true },
                    { min: 0, max: 5 }
                  )}
                />
                <Form.Text className="text-muted">
                  {errors.rating && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Number of Ratings</Form.Label>
                <Form.Control
                  type="number"
                  {...register("number_of_reviews", { required: true })}
                />
                <Form.Text className="text-muted">
                  {errors.number_of_reviews && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mt-2 w-75 mx-auto">
                <input type="submit" className="btn btn-success" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bookings;
