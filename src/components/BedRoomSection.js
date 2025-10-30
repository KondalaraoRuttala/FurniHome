import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BedRoomSection.css";
import { CartContext } from "./CartContext"; // ✅ Import CartContext

// 🛏️ Bedroom Images
import Bed1 from "../assets/Images/Bed1.jpg";
import Bed2 from "../assets/Images/Bed2.jpg";
import Bed3 from "../assets/Images/Bed3.jpg";
import Bed4 from "../assets/Images/Bed4.jpg";
import Bed5 from "../assets/Images/Bed5.jpg";
import Bed6 from "../assets/Images/Bed6.jpg";
import Bed7 from "../assets/Images/Bed7.jpg";
import Bed8 from "../assets/Images/Bed8.jpg";
import Bed9 from "../assets/Images/Bed9.jpg";
import Bed10 from "../assets/Images/Bed10.jpg";

// 🪄 Bedroom Items
const bedroomItems = [
  { id: 1, name: "Modern King Bed", price: "$850", image: Bed1 },
  { id: 2, name: "Classic Wooden Wardrobe", price: "$620", image: Bed2 },
  { id: 3, name: "Night Stand Lamp", price: "$120", image: Bed3 },
  { id: 4, name: "Luxury Dresser Table", price: "$400", image: Bed4 },
  { id: 5, name: "Comfy Queen Bed", price: "$780", image: Bed5 },
  { id: 6, name: "Two Door Wardrobe", price: "$550", image: Bed6 },
  { id: 7, name: "Stylish Bedside Lamp", price: "$140", image: Bed7 },
  { id: 8, name: "Minimal Dresser Set", price: "$380", image: Bed8 },
  { id: 9, name: "Storage Cabinet", price: "$450", image: Bed9 },
  { id: 10, name: "Luxury Bedding Set", price: "$320", image: Bed10 },
];

function BedRoomSection() {
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart

  return (
    <section className="bedroom-section py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Bedroom Collection</h2>
          <p className="text-muted">
            Explore our cozy and elegant bedroom designs crafted for modern living.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {bedroomItems.map((item) => (
            <div
              key={item.id}
              className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <div className="card product-card h-100 border-0 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top product-image"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{item.name}</h5>
                  <p className="text-muted mb-2">{item.price}</p>
                  <button
                    className="btn btn-outline-dark rounded-pill px-4"
                    onClick={() => addToCart(item)} // ✅ Add to Cart
                  >
                    Add to Cart
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

export default BedRoomSection;
