// src/components/AboutUs.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import { FaCouch, FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";
import aboutBg from "../assets/Images/NightSofa.jpg"; // ✅ Add your own background image

function AboutUs() {
  return (
    <section
      className="aboutus-section text-dark"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="overlay py-5">
        <div className="container py-5">
          {/* Heading Section */}
          <div className="text-center mb-5 text-white">
            <h2 className="fw-bold display-5 mb-3">About <span className="text-warning">EMART</span></h2>
            <p className="lead">
              Bringing comfort, style, and elegance to every home.
            </p>
          </div>

          {/* About Description */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="about-card p-4 p-md-5 bg-white rounded-4 shadow-lg text-center">
                <h4 className="fw-bold mb-3 text-dark">Our Story</h4>
                <p className="text-muted">
                  At <strong>EMART</strong>, we are passionate about helping you design
                  spaces that feel like home. From cozy sofas to elegant dining
                  sets, every product we offer blends comfort, design, and
                  durability. Our mission is to make luxury furniture accessible
                  and affordable for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Cards */}
          <div className="text-center mb-4">
            <h3 className="fw-bold text-white">Why Choose Us?</h3>
            <p className="text-light">We bring quality, trust, and style together.</p>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-md-3 col-sm-6">
              <div className="choose-card bg-white text-center p-4 rounded-4 shadow">
                <FaCouch size={40} className="text-warning mb-3" />
                <h5 className="fw-semibold">Premium Quality</h5>
                <p className="text-muted small">
                  Crafted with precision and top-notch materials for lasting comfort.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="choose-card bg-white text-center p-4 rounded-4 shadow">
                <FaShippingFast size={40} className="text-warning mb-3" />
                <h5 className="fw-semibold">Fast Delivery</h5>
                <p className="text-muted small">
                  Reliable and timely delivery right to your doorstep.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="choose-card bg-white text-center p-4 rounded-4 shadow">
                <FaDollarSign size={40} className="text-warning mb-3" />
                <h5 className="fw-semibold">Affordable Prices</h5>
                <p className="text-muted small">
                  Luxury furniture that suits your home and your budget.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="choose-card bg-white text-center p-4 rounded-4 shadow">
                <FaHeadset size={40} className="text-warning mb-3" />
                <h5 className="fw-semibold">24/7 Support</h5>
                <p className="text-muted small">
                  We’re always here to help you with your shopping journey.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="text-center mt-5">
            <div className="about-mission p-4 bg-white rounded-4 shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
              <h4 className="fw-bold text-dark mb-2">Our Mission</h4>
              <p className="text-muted mb-0">
                To create homes filled with warmth, beauty, and personality —
                one piece of furniture at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
