import React, { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import AddServices from "../AddServices/AddServices";
import ManageAllBookings from "../ManageAllBookings/ManageAllBookings";
import ManageAllServices from "../ManageAllServices/ManageAllServices";

const Admin = () => {
  const [render, setRender] = useState("addServices");
  return (
    <div>
      <h2 className="text-info text-center mt-1 bg-dark rounded mx-2 p-2">
        Admin Panel
      </h2>
      <Row className="mx-2 border rounded ">
        <Col className="border border-dark p-1 bg-dark" lg={3} md={3} sm={12}>
          <Container>
            <h4 className="text-center text-light">Dashboard</h4>
            <ListGroup as="ol" numbered>
              <ListGroup.Item variant="dark" as="li" className="admin-item">
                <Button
                  variant="success"
                  onClick={() => setRender("addServices")}
                >
                  {" "}
                  Add A Service
                </Button>
              </ListGroup.Item>
              <ListGroup.Item variant="dark" as="li" className="admin-item">
                <Button
                  variant="success"
                  onClick={() => setRender("manageBookings")}
                >
                  Manage All Bookings
                </Button>
              </ListGroup.Item>
              <ListGroup.Item variant="dark" as="li" className="admin-item">
                <Button
                  variant="success"
                  onClick={() => setRender("manageServices")}
                >
                  Manage All Services
                </Button>
              </ListGroup.Item>
              <ListGroup.Item variant="dark" as="li" className="admin-item">
                <Button variant="danger" onClick={() => setRender("logOut")}>
                  {" "}
                  Logout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Col>
        <Col lg={9} md={9} sm={12}>
          {render === "addServices" && <AddServices></AddServices>}
          {render === "manageServices" && (
            <ManageAllServices></ManageAllServices>
          )}
          {render === "manageBookings" && (
            <ManageAllBookings></ManageAllBookings>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
