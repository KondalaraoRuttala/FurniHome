// src/components/Deals.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Deals.css";
import Sofa1 from "../assets/Images/Sofa1.jpg";
import Dining from "../assets/Images/Dining3.jpg";
import Chair from "../assets/Images/WhiteChair.jpg";
import Bed from "../assets/Images/Bed7.jpg";

function Deals() {
  // Sample deals
  const deals = [
    {
      id: 1,
      name: "Modern Sofa Set",
      image: Sofa1,
      oldPrice: 35000,
      newPrice: 24999,
      discount: "30% OFF",
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      image: Dining,
      oldPrice: 28000,
      newPrice: 19999,
      discount: "28% OFF",
    },
    {
      id: 3,
      name: "Office Chair Deluxe",
      image: Chair,
      oldPrice: 15000,
      newPrice: 9999,
      discount: "33% OFF",
    },
    {
      id: 4,
      name: "Queen Size Bed",
      image: Bed,
      oldPrice: 48000,
      newPrice: 33999,
      discount: "29% OFF",
    },
  ];

  // Simple countdown (2 minutes)
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="deals-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">🔥 Exclusive Deals</h2>
          <p className="text-muted">Grab your favorite furniture at the best prices!</p>
          {timeLeft > 0 ? (
            <div className="timer fw-semibold text-danger">
              ⏳ Offer ends in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
          ) : (
            <div className="text-success fw-bold">🎉 Deals Expired! Stay tuned for new offers.</div>
          )}
        </div>

        <div className="row justify-content-center g-4">
          {deals.map((item) => (
            <div key={item.id} className="col-md-3 col-sm-6">
              <div className="card deal-card shadow-lg border-0 h-100">
                <div className="position-relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top rounded-top-4"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <span className="discount-badge">{item.discount}</span>
                </div>
                <div className="card-body text-center">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-muted mb-2">
                    <span className="text-decoration-line-through me-2">₹{item.oldPrice}</span>
                    <span className="text-success fw-bold">₹{item.newPrice}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Deals;
