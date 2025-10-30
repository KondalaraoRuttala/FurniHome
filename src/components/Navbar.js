import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalPrice = 0, totalItems = 0 } = useContext(CartContext) || {};
  const [q, setQ] = useState("");

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const handleCartClick = () => navigate("/cart");

  const onSearch = (e) => {
    e.preventDefault();
    if (q.trim()) navigate(`/products?q=${encodeURIComponent(q.trim())}`);
    else navigate("/products");
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />

      <style>{`
        .hs-navbar {
          background: linear-gradient(135deg,#6d4c41 0%, #4e342e 100%);
          color: #fff;
          box-shadow: 0 6px 18px rgba(18,18,18,0.25);
        }
        .hs-navbar .navbar-brand {
          font-weight: 700;
          color: #ffdca8;
        }
        .hs-navbar .nav-link {
          color: rgba(255,255,255,0.9);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hs-navbar .nav-link:hover {
          color: #ffdca8;
        }
        .hs-navbar .dropdown-menu {
          background: #fff;
          border-radius: 8px;
        }
        .hs-navbar .dropdown-item {
          font-weight: 500;
        }
        .hs-search {
          width: 320px;
        }
        .hs-btn-signup {
          background: white;
          color: #4e342e;
          border-radius: 20px;
          font-weight: 600;
        }
        .hs-btn-login {
          background: orange;
          color: white;
          border-radius: 20px;
          font-weight: 600;
        }
        .hs-sticky {
          position: sticky;
          top: 0;
          z-index: 999;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg hs-navbar hs-sticky">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fa-solid fa-couch me-2"></i>HomeStyle
          </Link>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <i className="fa-solid fa-store"></i> Products
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                  <i className="fa-solid fa-layer-group"></i> Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/sofas"><i className="fa-solid fa-couch"></i> Sofas</Link></li>
                  <li><Link className="dropdown-item" to="/beds"><i className="fa-solid fa-bed"></i> Beds</Link></li>
                  <li><Link className="dropdown-item" to="/dining"><i className="fa-solid fa-utensils"></i> Dining</Link></li>
                  <li><Link className="dropdown-item" to="/chairs"><i className="fa-solid fa-chair"></i> Chairs</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  <i className="fa-solid fa-circle-info"></i> About Us
                </Link>
              </li>
            </ul>

            <form className="d-flex me-3 hs-search" onSubmit={onSearch}>
              <input
                className="form-control rounded-pill"
                type="text"
                placeholder="Search furniture..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </form>

            <div className="d-flex align-items-center">
              <div className="text-white me-3" role="button" onClick={handleCartClick}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span> {totalItems} items | ₹{totalPrice}</span>
              </div>

              <button className="hs-btn-signup me-2" onClick={handleSignup}>
                <i className="fa-solid fa-user-plus"></i> Signup
              </button>

              <button className="hs-btn-login" onClick={handleLogin}>
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
