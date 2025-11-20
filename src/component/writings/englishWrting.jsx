import React, { useState } from "react";
import english1 from "../../assets/english1.png";
import english2 from "../../assets/english2.png";
import bg from "../../assets/backgroundfree.avif";

const images = [english1, english2];

export default function EnglishStory() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((index) => (index + 1) % images.length);
  };

  const prevPage = () => {
    setCurrentPage((index) => (index - 1 + images.length) % images.length);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-black"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px", 
          margin: "auto",
          position: "relative",
        }}
      >
        <img
          src={images[currentPage]}
          alt="slide"
          className="w-full h-auto rounded-xl"
        />

        {/* LEFT ARROW */}
        <button
          onClick={prevPage}
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
          onClick={nextPage}
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
    </div>
  );
}
