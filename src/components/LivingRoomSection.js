import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LivingRoomSection.css";
import { CartContext } from "./CartContext";


// Images
import Living1 from "../assets/Images/Living1.jpg";
import Living2 from "../assets/Images/Living2.jpg";
import Living3 from "../assets/Images/Living3.jpg";
import Living4 from "../assets/Images/Living4.jpg";
import Living5 from "../assets/Images/Living5.jpg";
import Living6 from "../assets/Images/Living6.jpg";
import Living7 from "../assets/Images/Living7.jpg";
import Living8 from "../assets/Images/Living8.jpg";
import Living9 from "../assets/Images/Living9.jpg";
import Living10 from "../assets/Images/Living10.jpg";

const livingRoomItems = [
  { id: 1, name: "Cozy Fabric Sofa", price: "$450", image: Living1 },
  { id: 2, name: "Modern Floor Lamp", price: "$120", image: Living2 },
  { id: 3, name: "Stylish Armchair", price: "$250", image: Living3 },
  { id: 4, name: "Wooden Coffee Table", price: "$180", image: Living4 },
  { id: 5, name: "Elegant Bookshelf", price: "$320", image: Living5 },
  { id: 6, name: "Contemporary TV Stand", price: "$400", image: Living6 },
  { id: 7, name: "Glass Top Center Table", price: "$210", image: Living7 },
  { id: 8, name: "Velvet Sofa Chair", price: "$280", image: Living8 },
  { id: 9, name: "Minimalist Wall Shelf", price: "$150", image: Living9 },
  { id: 10, name: "Luxury Lounge Set", price: "$650", image: Living10 },
];

function LivingRoomSection() {
  const { addToCart } = useContext(CartContext); // ✅ use context

  return (
    <section className="living-room-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Living Room Collection</h2>
          <p className="text-muted">
            Discover our curated range of modern and elegant living room furniture.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {livingRoomItems.map((item) => (
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

export default LivingRoomSection;
