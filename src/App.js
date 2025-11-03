import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext"; // ✅ fixed path
import NavbarComponent from "./components/NavbarComponent";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ModernInterior from "./components/ModernInterior";
import LivingRoomSection from "./components/LivingRoomSection";
import BedRoomSection from "./components/BedRoomSection";
import DiningSection from "./components/DiningSection";
import SofasSection from "./components/SofasSection";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CartComponent from "./components/CartComponent";
import AboutUs from "./components/AboutUs";
import Deals from "./components/Deals";
import Collections from "./components/Collections";
import CollectionDetails from "./components/CollectionDetails";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturedSection />
                <WhyChooseUs />
                <ModernInterior />
                <Footer />
              </>
            }
          />
          <Route path="/living" element={<LivingRoomSection />} />
          <Route path="/bedroom" element={<BedRoomSection />} />
          <Route path="/dining" element={<DiningSection />} />
          <Route path="/sofas" element={<SofasSection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/Deals" element={<Deals/>} />
          <Route path="/collections" element={<Collections/>} />
             <Route path="/collection/:id" element={<CollectionDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
