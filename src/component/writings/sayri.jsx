import React, { useState } from "react";

import { Link } from "react-router-dom";
import sayri1 from "../../assets/sayri1.png";
import syari2 from "../../assets/sayri2.png";
import syari3 from "../../assets/sayri3.png";
import sayri4 from "../../assets/sayri4.png";
import bg from "../../assets/backgroundfree.avif";

const images = [
  sayri1,
  syari2,
  syari3,
  sayri4,
];

export default function Sayri() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((index) => (index + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((index) => (index - 1 + images.length) % images.length);
  };

  return (
     <div
          className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-black"
          style={{ backgroundImage: `url(${bg})` }}
        >
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        position: "relative",
      }}
    >
      {/* IMAGE */}
      <img
        src={images[currentImageIndex]}
        alt="slide"
        style={{
          width: "100%",
          borderRadius: "12px",
        }}
      />

      {/* LEFT ARROW */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          color: "white",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          color: "white",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ❯
      </button>
    </div>
    //</div>
  );
}
