// src/components/Collections.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Collections.css";
import Living from "../assets/Images/Living7.jpg";
import Bed from "../assets/Images/Bed9.jpg";
import Modern from "../assets/Images/Modern.jpg";
import Out from "../assets/Images/Outdoor.jpg";

const collections = [
  {
    id: 1,
    name: "Luxury Living Room Set",
    description: "Experience comfort and elegance with premium handcrafted sofas.",
    image: Living,
    tag: "New Arrival",
  },
  {
    id: 2,
    name: "Royal Bedroom Collection",
    description: "Transform your space with modern wooden beds and cozy textures.",
    image: Bed,
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Elite Office Furniture",
    description: "Upgrade productivity with ergonomic and luxurious furniture.",
    image: Modern,
    tag: "Premium",
  },
  {
    id: 4,
    name: "Outdoor Elegance",
    description: "Luxury outdoor sets built with comfort and weather durability.",
    image: Out,
    tag: "Limited Edition",
  },
];

function Collections() {
  return (
    <section className="collections-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase text-dark">💎 Premium Collections</h2>
          <p className="text-muted">
            Explore our handpicked luxury collections crafted for style and sophistication.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {collections.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <div className="collection-card shadow-lg border-0 h-100 position-relative overflow-hidden">
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid collection-image"
                  />
                  <div className="tag-badge">{item.tag}</div>
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="fw-bold text-dark">{item.name}</h5>
                  <p className="text-muted small">{item.description}</p>
                  <button className="btn btn-outline-dark rounded-pill px-4 mt-2">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
