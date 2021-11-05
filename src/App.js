import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./custom.css";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Header from "./Shared/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
