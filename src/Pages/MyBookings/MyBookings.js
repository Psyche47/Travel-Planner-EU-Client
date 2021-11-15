import {
  Container,
  Row,
  Button,
  Col,
  Card,
  ListGroupItem,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdMoney as Price, MdOutlineReviews as Review } from "react-icons/md";
import { AiOutlineStar as Star } from "react-icons/ai";
import { BsBookmarkCheck as Check } from "react-icons/bs";
import { GrLocation as Destination, GrMapLocation } from "react-icons/gr";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const MyBookings = () => {
  //const email = sessionStorage.getItem("email");
  const cardImg = {
    height: "200px",
    width: "286px",
  };
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteBooking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          handleClose();
          alert("Booking cancelled successfully.");
          setControl(!control);
        }
      });
  };
  return (
    <div>
      <Container>
        <h4 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          Booked Trips
        </h4>
        <div>
          <Row>
            {!bookings.length ? (
              <Col lg={12}>
                <h4 className="rounded text-center text-light bg-dark p-3 mt-3">
                  No Bookings Found. See all our affordable trip offers.
                  <Link to="/services">
                    <Button variant="primary" className="ms-3">
                      Services
                    </Button>
                  </Link>
                </h4>
              </Col>
            ) : (
              bookings.map((booking) => (
                <Col lg={4} md={6} sm={12} key={booking._id}>
                  <Card style={{ width: "18rem" }} className="mt-3 g-2 mx-auto">
                    <Card.Img
                      variant="top"
                      src={booking?.image}
                      style={cardImg}
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <Destination
                          className="me-1"
                          size="1.5em"
                        ></Destination>
                        {booking?.destination}
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        {" "}
                        <GrMapLocation className="me-1" size="1.5em" />
                        {booking?.city}, {booking?.country}
                      </ListGroupItem>
                      <ListGroupItem>
                        <Price className="me-1" size="1.5em" />${booking?.price}{" "}
                        approx.
                      </ListGroupItem>
                      <ListGroupItem>
                        <Star className="me-1" size="1.5em" />
                        {booking?.rating}/5.0 reviews.
                      </ListGroupItem>
                      <ListGroupItem>
                        <Review className="me-1" size="1.5em" />
                        {booking?.number_of_reviews} reviews.
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="d-flex justify-content-center">
                          <Button
                            // () => handleDelete(booking?._id)
                            onClick={handleShow}
                            variant="danger"
                            className="text-light"
                          >
                            <Check /> Cancel Booking
                          </Button>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Cancellation Confirmation</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to cancel this booking?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={() => handleDelete(booking?._id)}
                        >
                          I'm Sure
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                          No
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MyBookings;
