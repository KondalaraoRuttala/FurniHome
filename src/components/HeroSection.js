import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Modern Interior Design Studio",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
      img: "https://themewagon.github.io/furni/images/couch.png",
    },
    {
      id: 2,
      title: "Comfortable & Stylish Furniture",
      description:
        "Discover elegant and functional pieces crafted to fit your modern lifestyle. Designed for comfort, built for beauty.",
      img: "https://themewagon.github.io/furni/images/product-1.png",
    },
    {
      id: 3,
      title: "Transform Your Living Space",
      description:
        "Curate your dream interior with our premium collection of furniture and décor that blends art with comfort.",
      img: "https://themewagon.github.io/furni/images/product-2.png",
    },
  ];

  return (
    <section className="hero-carousel-section">
      <Carousel
        controls={true}
        indicators={true}
        pause={false}
        interval={3000}     // auto-slide every 3 seconds
        touch={true}
        slide={true}        // 👈 enables sliding (not fading)
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <Container>
              <Row className="align-items-center min-vh-75">
                <Col md={6} className="text-slide">
                  <h1 className="fw-bold display-5 text-light mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-light mb-4">{slide.description}</p>
                  <div className="d-flex gap-3">
                    <Button
                      variant="warning"
                      className="fw-semibold px-4 py-2 rounded-pill"
                    >
                      Shop Now
                    </Button>
                    <Button
                      variant="outline-light"
                      className="fw-semibold px-4 py-2 rounded-pill"
                    >
                      Explore
                    </Button>
                  </div>
                </Col>

                <Col md={6} className="text-center mt-4 mt-md-0 image-slide">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="img-fluid sofa-img"
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
