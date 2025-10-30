import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModernInterior.css";
import Img4 from "../assets/Images/Modern.jpg"; // Single image

function ModernInterior() {
  return (
    <section className="modern-interior-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - single image */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src={Img4}
              alt="Modern Interior"
              className="img-fluid rounded-4 shadow-sm modern-single-img"
            />
          </div>

          {/* Right side - content */}
          <div className="col-lg-6 modern-content">
            <h2 className="fw-bold mb-3">We Help You Make Modern Interior Design</h2>
            <p className="text-muted mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl
              dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
              dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus
              et malesuada.
            </p>

            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>✔ Donec vitae odio quis nisl</li>
                  <li>✔ Donec vitae odio quis nisl</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>✔ Donec vitae odio quis nisl</li>
                  <li>✔ Donec vitae odio quis nisl</li>
                </ul>
              </div>
            </div>

            <button className="btn btn-dark rounded-pill px-4 mt-3">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernInterior;
