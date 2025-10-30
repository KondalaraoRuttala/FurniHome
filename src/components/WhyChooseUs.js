import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nordic from "../assets/Images/Interior.jpg";

const FurnitureImg = Nordic;

function WhyChooseUs() {
  const features = [
    {
      title: "Fast & Free Shipping",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
      icon: "fa-solid fa-truck-fast",
    },
    {
      title: "Easy to Shop",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
      icon: "fa-solid fa-bag-shopping",
    },
    {
      title: "24/7 Support",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
      icon: "fa-solid fa-headset",
    },
    {
      title: "Hassle Free Returns",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
      icon: "fa-solid fa-rotate-left",
    },
  ];

  return (
    <>
      {/* Font Awesome for icons */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style>{`
        .why-choose-section {
          background-color: #fffaf5;
          padding: 100px 0;
        }

        .why-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #4e342e;
          margin-bottom: 20px;
        }

        .why-text {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 600px;
        }

        .why-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
          background-color: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .why-icon {
          font-size: 1.8rem;
          color: #b87333;
          background-color: #fff3e0;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
          flex-shrink: 0;
        }

        .why-card:hover .why-icon {
          background-color: #b87333;
          color: white;
          transform: rotate(8deg);
        }

        .why-card-title {
          font-weight: 600;
          color: #4e342e;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .why-card-text {
          color: #6c757d;
          font-size: 0.95rem;
          margin: 0;
        }

        .why-image {
          width: 100%;
          max-width: 480px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        @media (max-width: 992px) {
          .why-image {
            margin-top: 40px;
          }
        }
      `}</style>

      {/* Section Layout */}
      <section className="why-choose-section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Left: Text & Features */}
            <div className="col-lg-6">
              <h2 className="why-title">Why Choose Us</h2>
              <p className="why-text">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              {features.map((item, index) => (
                <div className="why-card" key={index}>
                  <div className="why-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h5 className="why-card-title">{item.title}</h5>
                    <p className="why-card-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="col-lg-6 text-center">
              <img
                src={FurnitureImg}
                alt="Why Choose Us"
                className="why-image img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
