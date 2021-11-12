import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Booking from "../Booking/Booking";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  //const email = sessionStorage.getItem("email");
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <Container>
        <h4 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          Booked Trips
        </h4>
        <div className="d-flex justify-content-between">
          <Row>
            {bookings.map((booking) => (
              <Booking key={booking._id} booking={booking}></Booking>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MyBookings;
