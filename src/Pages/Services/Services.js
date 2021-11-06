import React from "react";
import { Container } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  return (
    <div>
      <Container>
        <h5 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          All of Our Services
        </h5>
        <div className="d-flex justify-content-between">
          <div className="row">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
