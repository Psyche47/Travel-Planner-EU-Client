import React from "react";
import { Container } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
  const [services] = useServices();
  return (
    <div>
      <Banner></Banner>
      <Container>
        <h3 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          Trips you can book today
        </h3>
        <div className="d-flex justify-content-between">
          <div className="row">
            {services.slice(0, 6).map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
