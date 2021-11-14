import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const ManageAllBookings = () => {
  const [bookings, setBookings] = useState();
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/myBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [control]);

  const handleUpdate = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteBooking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Booking deleted successfully.");
          setControl(!control);
        }
      });
  };
  return (
    <div>
      <div>
        <Table striped bordered hover responsive className="caption-top">
          <caption className="text-center h3 bg-dark text-light rounded p-2">
            Manage All Bookings
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {bookings?.map((booking, index) => (
            <tbody key={booking._id}>
              <tr>
                <td>{index}</td>
                <td>{booking?.name}</td>
                <td>{booking?.email}</td>
                <td>{booking?.date}</td>
                <td>{booking?.destination}</td>
                <td>{booking?.status}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdate(booking?._id)}
                  >
                    {booking?.status === "pending" ? "Approve" : "Pending"}
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(booking?._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllBookings;
