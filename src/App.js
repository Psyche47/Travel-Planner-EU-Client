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
import AddServices from "./Pages/AddServices/AddServices";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <PrivateRoute path="/bookings">
              <Bookings></Bookings>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
