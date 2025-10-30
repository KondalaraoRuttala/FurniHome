import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartContext } from "./CartContext";


const MenuLinks = [
  { id: 1, name: "Home", path: "/", icon: "fas fa-home" },
  { id: 2, name: "Collections", path: "/collections", icon: "fas fa-couch" },
  { id: 3, name: "Deals", path: "/deals", icon: "fas fa-fire" },
  { id: 4, name: "Categories", path: "#", icon: "fas fa-th-large" },
  { id: 5, name: "About Us", path: "/about", icon: "fas fa-info-circle" },
];

const CategoryItems = [
  { name: "Living Room", path: "/living", icon: "fas fa-chair" },
  { name: "Beds", path: "/bedroom", icon: "fas fa-bed" },
  { name: "Dining", path: "/dining", icon: "fas fa-utensils" },
  { name: "Sofas", path: "/sofas", icon: "fas fa-briefcase" },
];

function NavbarComponent() {
  const { cartItems = [] } = useContext(CartContext) || {}; // ✅ safe destructure
  const cartCount = Array.isArray(cartItems)
    ? cartItems.reduce((count, item) => count + (item.quantity || 1), 0)
    : 0;

  return (
    <>
      {/* Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />

      <style jsx>{`
        .navbar-custom {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(150, 75, 0, 0.1);
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(45deg, #b87333, #8b4513);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-link-custom {
          color: #6c757d !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #8b4513 !important;
          background-color: rgba(184, 115, 51, 0.1);
          transform: translateY(-2px);
        }

        .dropdown-menu-custom {
          border: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          padding: 0.5rem 0;
          margin-top: 0.5rem;
        }

        .dropdown-item-custom {
          padding: 0.75rem 1.5rem;
          color: #6c757d;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .dropdown-item-custom:hover {
          background: linear-gradient(45deg, #b87333, #8b4513);
          color: white !important;
          transform: translateX(5px);
        }

        .cart-icon {
          position: relative;
          cursor: pointer;
          font-size: 1.4rem;
          color: #5a3e1b;
          margin-right: 1rem;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -10px;
          background: #b87333;
          color: #fff;
          border-radius: 50%;
          font-size: 0.75rem;
          padding: 2px 6px;
        }

        .btn-login,
        .btn-signup {
          border: none;
          border-radius: 25px;
          padding: 6px 18px;
          font-weight: 500;
          transition: 0.3s ease;
          text-decoration: none;
        }

        .btn-login {
          background-color: transparent;
          color: #8b4513;
          border: 1px solid #b87333;
          margin-right: 10px;
        }

        .btn-login:hover {
          background-color: #b87333;
          color: white;
        }

        .btn-signup {
          background-color: #8b4513;
          color: white;
        }

        .btn-signup:hover {
          background-color: #b87333;
          transform: translateY(-2px);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <i className="fas fa-couch me-2"></i>FurniHome
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {MenuLinks.map((item) =>
                item.name === "Categories" ? (
                  <li key={item.id} className="nav-item dropdown">
                    <a
                      className="nav-link nav-link-custom dropdown-toggle"
                      href="#"
                      id="categoriesDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className={`${item.icon} me-1`}></i>
                      {item.name}
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-custom"
                      aria-labelledby="categoriesDropdown"
                    >
                      {CategoryItems.map((cat, i) => (
                        <li key={i}>
                          <Link
                            className="dropdown-item dropdown-item-custom"
                            to={cat.path}
                          >
                            <i className={`${cat.icon} me-2`}></i>
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.id} className="nav-item">
                    <Link className="nav-link nav-link-custom" to={item.path}>
                      <i className={`${item.icon} me-1`}></i>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* ✅ Dynamic Cart + Auth Buttons */}
            <div className="d-flex align-items-center ms-lg-3">
              <Link to="/cart" className="cart-icon position-relative">
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </Link>
              <Link to="/login" className="btn-login">
                Login
              </Link>
              <Link to="/signup" className="btn-signup ms-2">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
