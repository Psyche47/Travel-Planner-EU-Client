import React, { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const MyBookings = () => {
  const email = sessionStorage.getItem("email");
  console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default MyBookings;
