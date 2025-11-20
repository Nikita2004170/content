import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/backgroundfree.avif";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-black"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-opacity-50 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Welcome to My Writing Universe ✨
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-10 drop-shadow-md">
            This website is a special place where you can explore beautiful
            <span className="text-pink-400 font-semibold"> Shayari</span>, read
            heart-touching
            <span className="text-pink-400 font-semibold"> Stories</span>, and
            discover deep and meaningful
            <span className="text-pink-400 font-semibold">
              {" "}
              English Writings
            </span>
            . Enjoy the world of creativity in just one click.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
<Link
to="/home/sayri"
className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
>
Explore Shayari
</Link>


<Link
to="/home/story"
className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
>
 Story
</Link>


<Link
to="/home/englishstory"
className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
>
English Story
</Link>
</div>
        </div>
      </div>
    </div>
  );
}
