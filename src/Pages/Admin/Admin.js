import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";

const Admin = () => {
  const [control, setControl] = useState("addServices");
  console.log(control);
  return (
    <div>
      <h2 className="text-info text-center mt-1 bg-dark rounded mx-2 p-2">
        Admin Panel
      </h2>
      <Row className="mx-2 border rounded ">
        <Col className="border border-dark p-1 bg-dark" lg={3} md={3} sm={12}>
          <h4 className="text-center text-light">Dashboard</h4>
          <ListGroup as="ol" numbered>
            <ListGroup.Item variant="dark" as="li" className="admin-item">
              <Button
                variant="success"
                onClick={() => setControl("addServices")}
              >
                {" "}
                Add A Service
              </Button>
            </ListGroup.Item>
            <ListGroup.Item variant="dark" as="li" className="admin-item">
              <Button
                variant="success"
                onClick={() => setControl("manageServices")}
              >
                Manage All Bookings
              </Button>
            </ListGroup.Item>
            <ListGroup.Item variant="dark" as="li" className="admin-item">
              <Button variant="danger" onClick={() => setControl("logOut")}>
                {" "}
                Logout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={9} md={9} sm={12}></Col>
      </Row>
    </div>
  );
};

export default Admin;
