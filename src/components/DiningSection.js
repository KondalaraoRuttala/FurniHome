import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DiningSection.css";
import { CartContext } from "./CartContext"; // ✅ Import context

// 🍽️ Images
import Dining1 from "../assets/Images/Dining1.jpg";
import Dining2 from "../assets/Images/Dining2.jpg";
import Dining3 from "../assets/Images/Dining3.jpg";
import Dining4 from "../assets/Images/Dining4.jpg";
import Dining5 from "../assets/Images/Dining5.jpg";
import Dining6 from "../assets/Images/Dining6.jpg";
import Dining7 from "../assets/Images/Dining7.jpg";
import Dining8 from "../assets/Images/Dining8.jpg";
import Dining9 from "../assets/Images/Dining9.jpg";
import Dining10 from "../assets/Images/Dining10.jpg";

// 🍴 Dining Room Items
const diningItems = [
  { id: 1, name: "Classic Dining Table Set", price: "$750", image: Dining1 },
  { id: 2, name: "6-Seater Wooden Dining", price: "$890", image: Dining2 },
  { id: 3, name: "Glass Top Dining Table", price: "$680", image: Dining3 },
  { id: 4, name: "Compact 4-Seater Table", price: "$540", image: Dining4 },
  { id: 5, name: "Modern Dining Chairs", price: "$320", image: Dining5 },
  { id: 6, name: "Elegant Table Runner", price: "$90", image: Dining6 },
  { id: 7, name: "Dining Bench Set", price: "$450", image: Dining7 },
  { id: 8, name: "Round Marble Table", price: "$920", image: Dining8 },
  { id: 9, name: "Rustic Dining Setup", price: "$780", image: Dining9 },
  { id: 10, name: "Luxury Dining Package", price: "$1,050", image: Dining10 },
];

function DiningSection() {
  const { addToCart } = useContext(CartContext); // ✅ use context

  return (
    <section className="dining-section py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Dining Collection</h2>
          <p className="text-muted">
            Discover our range of elegant and functional dining furniture designed for every home.
          </p>
        </div>

        {/* Cards */}
        <div className="row justify-content-center g-4">
          {diningItems.map((item) => (
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
                    onClick={() => addToCart(item)} // ✅ add to cart
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

export default DiningSection;
