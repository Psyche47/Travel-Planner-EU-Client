import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./custom.css";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Bookings from "./Pages/Bookings/Bookings";
import Header from "./Shared/Header";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <PrivateRoute path="/bookings" element={<Bookings />} />
            <PrivateRoute path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
