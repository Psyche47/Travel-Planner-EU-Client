import React, { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  useEffect(() => {
    fetch("");
  }, []);
  return <div></div>;
};

export default MyBookings;
