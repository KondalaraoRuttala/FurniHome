import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SofasSection.css";
import { CartContext } from "../components/CartContext"; // ✅ import context

// Sofa Images
import Sofa1 from "../assets/Images/Sofa1.jpg";
import Sofa2 from "../assets/Images/Sofa2.jpg";
import Sofa3 from "../assets/Images/Sofa3.jpg";
import Sofa4 from "../assets/Images/Sofa4.jpg";
import Sofa5 from "../assets/Images/Sofa5.jpg";
import Sofa6 from "../assets/Images/Sofa6.jpg";
import Sofa7 from "../assets/Images/Sofa7.jpg";
import Sofa8 from "../assets/Images/Sofa8.jpg";
import Sofa9 from "../assets/Images/Sofa9.jpg";
import Sofa10 from "../assets/Images/Sofa10.jpg";

const sofaItems = [
  { id: 1, name: "Modern Fabric Sofa", price: 550, image: Sofa1 },
  { id: 2, name: "Luxury Leather Sofa", price: 980, image: Sofa2 },
  { id: 3, name: "3-Seater Classic Sofa", price: 720, image: Sofa3 },
  { id: 4, name: "Compact Loveseat", price: 480, image: Sofa4 },
  { id: 5, name: "Sectional Corner Sofa", price: 1150, image: Sofa5 },
  { id: 6, name: "Velvet Tufted Sofa", price: 890, image: Sofa6 },
  { id: 7, name: "Recliner Sofa Set", price: 1250, image: Sofa7 },
  { id: 8, name: "Minimalist Couch", price: 600, image: Sofa8 },
  { id: 9, name: "Wooden Frame Sofa", price: 770, image: Sofa9 },
  { id: 10, name: "Luxury Lounge Sofa", price: 1050, image: Sofa10 },
];

function SofasSection() {
  const { addToCart } = useContext(CartContext); // ✅ get addToCart function

  return (
    <section className="sofas-section py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Sofa Collection</h2>
          <p className="text-muted">
            Explore our comfortable and stylish sofa designs made for every space.
          </p>
        </div>

        {/* Product Cards */}
        <div className="row g-4 justify-content-center">
          {sofaItems.map((item) => (
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
                  <p className="text-muted mb-2">${item.price}</p>
                  <button
                    className="btn btn-outline-dark rounded-pill px-4"
                    onClick={() => addToCart(item)} // ✅ adds to cart
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

export default SofasSection;
