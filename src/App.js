import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./custom.css";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Bookings from "./Pages/Bookings/Bookings";
import Header from "./Shared/Header";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
