import React from "react";

function Carousel() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      {/* Slideshow */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/slide1.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="/images/slide2.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="/images/slide3.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* Controls/buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;
