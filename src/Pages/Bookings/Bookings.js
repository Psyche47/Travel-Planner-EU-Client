import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";

const Bookings = () => {
  const [services] = useServices();
  const { id } = useParams();
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>{singleService?.destination}</h2>
    </div>
  );
};

export default Bookings;
