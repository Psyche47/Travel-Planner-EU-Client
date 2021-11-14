import React from "react";
import { Table, Button } from "react-bootstrap";
import useServices from "../../Hooks/useServices";

const ManageAllServices = () => {
  const [services] = useServices();
  return (
    <div>
      <Table striped bordered hover>
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
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{service?.destination}</td>
              <td>{service?.country}</td>
              <td>{service?.city}</td>
              <td>{service?.price}</td>
              <td>{service?.rating}</td>
              <td>{service?.number_of_reviews}</td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllServices;
