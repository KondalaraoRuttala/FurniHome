import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-secondary pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* 🛋 Brand Info */}
          <div className="col-12 col-md-4">
            <h3 className="fw-bold text-uppercase mb-3">eMart</h3>
            <p className="small">
              Upgrade your lifestyle with premium quality <strong>furniture</strong>. 
              From stylish sofas and beds to elegant dining sets, we bring comfort 
              and beauty to your home.
            </p>
          </div>

          {/* 🪑 Furniture Categories */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Categories</h6>
            <ul className="list-unstyled footer-links">
              <li><i className="bi bi-house-door me-2"></i>Sofas</li>
              <li><i className="bi bi-door-open me-2"></i>Beds</li>
              <li><i className="bi bi-table me-2"></i>Dining Tables</li>
              <li><i className="bi bi-chair me-2"></i>Chairs</li>
            </ul>
          </div>

          {/* 📞 Support Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Support</h6>
            <ul className="list-unstyled footer-links">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Return Policy</li>
            </ul>
          </div>

          {/* ✉️ Newsletter */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Subscribe</h6>
            <p className="small">
              Join our newsletter for special offers and home decor tips.
            </p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2 rounded-pill"
              />
              <button type="submit" className="btn btn-brown rounded-pill">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-dark my-4" />

        {/* 🌐 Social Icons */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 small">
            © {new Date().getFullYear()} <strong>eMart</strong> – All Rights Reserved.
          </p>
          <div className="footer-social">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
