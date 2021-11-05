import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Admin = () => {
  return (
    <div>
      <h2 className="text-info text-center mt-1 bg-dark rounded mx-2 p-2">
        Admin Panel
      </h2>

      <Container>
        <Row>
          <Col className="border border-dark p-1 bg-dark" lg={3} md={3} sm={12}>
            <h4 className="text-center text-light">Dashboard</h4>
            <ul className="text-light">
              <li>Add A Service</li>
              <li>Manage All Services</li>
              <li>Logout</li>
            </ul>
          </Col>
          <Col lg={9} md={9} sm={12}>
            <h2>Hiiii</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
