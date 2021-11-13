import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return [bookings, setBookings];
};

export default useBookings;
