import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aero from "../assets/Images/AeroChair.png";
import Nordic from "../assets/Images/NordicChair.png";
import Ergonomic from "../assets/Images/ErgonomicChair.png"; // new image

function FeaturedSection() {
  const products = [
    {
      name: "Nordic Chair",
      price: "$50.00",
      image: Nordic,
    },
    {
      name: "Kruzo Aero Chair",
      price: "$78.00",
      image: Aero,
    },
    {
      name: "Ergonomic Chair",
      price: "$85.00",
      image: Ergonomic,
    },
  ];

  return (
    <>
      <style>{`
        .featured-section {
          padding: 80px 0;
          background-color: #fffaf5;
        }

        .featured-content {
          max-width: 600px;
        }

        .featured-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #4e342e;
        }

        .featured-text {
          font-size: 1rem;
          color: #6c757d;
          line-height: 1.8;
        }

        .product-card {
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          text-align: center;
          overflow: hidden;
          height: 100%;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .product-image {
          width: 100%;
          height: 230px; /* unified height */
          object-fit: contain; /* keeps proportions */
          background-color: #f9f9f9;
          padding: 20px;
        }

        .product-info {
          padding: 20px;
        }

        .product-name {
          font-weight: 600;
          color: #4e342e;
          font-size: 1.2rem;
        }

        .product-price {
          color: #b87333;
          font-weight: 600;
          font-size: 1.1rem;
        }

        @media (max-width: 991px) {
          .featured-section {
            text-align: center;
          }
        }
      `}</style>

      <section className="featured-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="featured-content">
                <h2 className="featured-title mb-3">
                  Crafted with excellent material
                </h2>
                <p className="featured-text">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
              </div>
            </div>

            {/* Products Section */}
            <div className="col-lg-8">
              <div className="row g-4">
                {products.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="product-card">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                      <div className="product-info">
                        <h5 className="product-name">{item.name}</h5>
                        <p className="product-price">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedSection;
