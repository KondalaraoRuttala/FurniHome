// src/components/CollectionDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CollectionDetails.css"; 
import Living from "../assets/Images/Living7.jpg";
import Bed from "../assets/Images/Bed9.jpg";
import Modern from "../assets/Images/Modern.jpg";
import Out from "../assets/Images/Outdoor.jpg";

const collections = [
  {
    id: 1,
    name: "Luxury Living Room Set",
    image: Living,
    details:
      "This luxurious living room set features handcrafted wooden frames, top-grain leather, and plush cushions designed for ultimate comfort and sophistication.",
    extra:
      "Every piece in the Luxury Living Room Set is made with precision and care, blending timeless design with modern materials. The neutral tones and rich textures bring warmth and elegance to your home. Perfect for both large gatherings and intimate family moments, this collection elevates your living space into a haven of relaxation and style.",
  },
  {
    id: 2,
    name: "Royal Bedroom Collection",
    image: Bed,
    details:
      "The Royal Bedroom Collection combines modern craftsmanship with classic elegance — including king-sized beds, nightstands, and ambient lighting options.",
    extra:
      "Inspired by royal aesthetics, this collection embodies luxury through its use of fine woodwork and intricate detailing. The rich finishes and soft fabrics create a cozy yet regal atmosphere, perfect for unwinding after a long day. The collection also offers customization options for color palettes and finishes to match your personal taste.",
  },
  {
    id: 3,
    name: "Elite Office Furniture",
    image: Modern,
    details:
      "Designed for professionals, this collection offers ergonomic chairs, executive desks, and modern shelving solutions to elevate your workspace.",
    extra:
      "Each item in the Elite Office Furniture collection focuses on enhancing productivity and comfort. The designs integrate smart storage, clean lines, and minimalistic finishes that inspire focus and creativity. Whether for home offices or corporate setups, this range provides functionality without compromising on style.",
  },
  {
    id: 4,
    name: "Outdoor Elegance",
    image: Out,
    details:
      "Built with durable rattan and weatherproof fabrics, this outdoor collection redefines comfort for patios and terraces.",
    extra:
      "Perfect for sunny days or cozy evenings under the stars, the Outdoor Elegance collection is designed to withstand the elements while maintaining a luxurious look. The lightweight yet sturdy frames make rearranging easy, and the weather-resistant fabrics ensure long-lasting beauty. Ideal for entertaining guests or relaxing in your private outdoor sanctuary.",
  },
];

function CollectionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const collection = collections.find((item) => item.id === parseInt(id));

  if (!collection) {
    return (
      <div className="container text-center py-5">
        <h2>Collection not found</h2>
        <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
          Back to Collections
        </button>
      </div>
    );
  }

  return (
    <div className="collection-details-container py-5 d-flex justify-content-center align-items-center">
      <div className="details-card shadow-lg rounded-4 p-4 bg-white container">
        <button
          className="btn btn-outline-dark mb-4"
          style={{ fontSize: "0.85rem", padding: "6px 16px", maxWidth: "120px" }}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* 🖼️ Image Left - Text Right Layout */}
        <div className="row g-5 align-items-center">
          {/* Left: Image */}
          <div className="col-md-6 text-center">
            <img
              src={collection.image}
              alt={collection.name}
              className="collection-detail-image img-fluid rounded shadow-sm"
              style={{ maxHeight: "480px", objectFit: "cover" }}
            />
          </div>

          {/* Right: Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">{collection.name}</h2>
            <p className="text-muted mt-3">{collection.details}</p>

            {/* 🌟 Extra paragraph beside image */}
            <div className="mt-4">
              <h4 className="fw-semibold">More About This Collection</h4>
              <p className="text-secondary mt-3">{collection.extra}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionDetails;
