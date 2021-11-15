import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const ManageAllServices = () => {
  const [services, setServices] = useState();
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://protected-cliffs-47621.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`https://protected-cliffs-47621.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Service deleted successfully.");
          setControl(!control);
        }
      });
  };
  return (
    <div>
      <Table striped bordered hover responsive className="caption-top">
        <caption className="text-center h3 bg-dark text-light rounded p-2">
          Manage All Services
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Destination</th>
            <th>Country</th>
            <th>City</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Number of Reviews</th>
            <th>Action</th>
          </tr>
        </thead>
        {services?.map((service, index) => (
          <tbody key={service._id}>
            <tr>
              <td>{index}</td>
              <td>{service?.destination}</td>
              <td>{service?.country}</td>
              <td>{service?.city}</td>
              <td>{service?.price}</td>
              <td>{service?.rating}</td>
              <td>{service?.number_of_reviews}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(service?._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllServices;
