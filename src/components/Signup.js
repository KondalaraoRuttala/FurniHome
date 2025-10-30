import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #4b3621 0%, #8b6f47 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(139, 69, 19, 0.5)",
          filter: "blur(80px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(210, 180, 140, 0.5)",
          filter: "blur(90px)",
        }}
      ></div>

      {/* Signup Card */}
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "400px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#8B4513" }}>
            Create Account
          </h2>
          <p className="text-muted">Join EMART Furniture Store</p>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control rounded-pill px-3 py-2"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-pill px-3 py-2"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill px-3 py-2"
              id="password"
              placeholder="Create password"
            />
          </div>

          <button
            type="submit"
            className="btn w-100 rounded-pill py-2 fw-semibold shadow-sm"
            style={{
              backgroundColor: "#8B4513",
              color: "white",
              transition: "0.3s",
            }}
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="small text-muted">
            Already have an account?{" "}
            <a href="/login" className="fw-semibold text-decoration-none" style={{ color: "#8B4513" }}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
