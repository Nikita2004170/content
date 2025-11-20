import React, { useState } from "react";
 import insta from "../assets/instalogo.avif";
 import linkedin from "../assets/linkedinlogo.jpeg";
 import github from "../assets/githublogo.svg";

 export default function Footer() {
  return (
//     <footer className="bg-amber-50 text-black py-6 mt-10">
//       <div className="max-w-screen-xl mx-auto text-center">

//         <h3 className="text-lg font-semibold mb-3">Connect with me</h3>

//         <div className="flex items-center justify-center space-x-6">

//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com/sachan1801"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-70 transition"
//           >
//             <img
//               src={insta}
//               alt="Instagram"
//               className="h-8 w-8"
//             />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/nikita-sachan-3426b1275/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-70 transition"
//           >
//             <img
//               src={linkedin}
//               alt="LinkedIn"
//               className="h-8 w-8"
//             />
//           </a>

//           {/* GitHub */}
//           <a
//             href="https://github.com/Nikita2004170"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-70 transition"
//           >
//             <img
//               src={github}
//               alt="GitHub"
//               className="h-8 w-8 invert"
//             />
//           </a>

//         </div>

//         <p className="text-gray-400 text-sm mt-4">
//           © {new Date().getFullYear()} Nikita Sachan
//         </p>
//       </div>
//     </footer>
//   );
// }
<footer className="bg-amber-50 text-black dark:bg-black dark:text-white py-6 mt-10">
  <div className="max-w-screen-xl mx-auto text-center">

    <h3 className="text-lg font-semibold mb-3">Connect with me</h3>

    <div className="flex items-center justify-center space-x-6">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sachan1801"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition"
      >
        <img
          src={insta}
          alt="Instagram"
          className="h-8 w-8 dark:invert-0"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/nikita-sachan-3426b1275"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition"
      >
        <img
          src={linkedin}
          alt="LinkedIn"
          className="h-8 w-8 dark:invert"
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Nikita2004170"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition"
      >
        <img
          src={github}
          alt="GitHub"
          className="h-8 w-8 invert dark:invert-0"
        />
      </a>

    </div>

    <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
      © {new Date().getFullYear()} Nikita Sachan
    </p>
  </div>
</footer>
  )
}