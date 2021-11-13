import { Container, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useBookings from "../../Hooks/useBookings";
import Booking from "../Booking/Booking";

const MyBookings = () => {
  //const email = sessionStorage.getItem("email");
  const [bookings] = useBookings();
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
                    <Button variant="primary">Services</Button>
                  </Link>
                </h4>
              </Col>
            ) : (
              bookings.map((booking) => (
                <Booking key={booking._id} booking={booking}></Booking>
              ))
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MyBookings;
