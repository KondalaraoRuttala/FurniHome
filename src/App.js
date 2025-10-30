import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
       <CartProvider>
      {/* your routes and components */}
    </CartProvider>
      <Navbar />
      <Carousel />
      <Footer />
      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Welcome to EMART Home Page</h2>} />
        <Route path="/services" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Services Page</h2>} />
        <Route path="/deals" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Deals Page</h2>} />
        <Route path="/aboutus" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>About Us Page</h2>} />

        {/* Pages for Signup and Login */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
