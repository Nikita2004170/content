import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.avif";
import ThemeBtn from "./themeBtn.jsx";

// export default function Header() {
//   return (
//     <header className="shadow sticky z-50 top-0 bg-white">
//       <nav className="border-gray-200 px-4 lg:px-6 py-3">
//         <div className="flex justify-between items-center mx-auto max-w-screen-xl">

//           {/* Logo */}
//           <Link to="/home" className="flex items-center gap-2">
//             <img src={logo} alt="logo" className="h-12 w-12 rounded-lg" />
//             <span className="text-xl font-bold text-gray-800">My Website</span>
//           </Link>

//           {/* Navigation Menu */}
//           <div className="hidden lg:flex items-center gap-10">
//             <NavLink
//               to="/home"
//               className={({ isActive }) =>
//                 `text-lg duration-200 ${
//                   isActive ? "text-orange-700 font-semibold" : "text-gray-700"
//                 } hover:text-orange-700`
//               }
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/home/sayri"
//               className={({ isActive }) =>
//                 `text-lg duration-200 ${
//                   isActive ? "text-orange-700 font-semibold" : "text-gray-700"
//                 } hover:text-orange-700`
//               }
//             >
//               Sayri
//             </NavLink>

//             <NavLink
//               to="/home/story"
//               className={({ isActive }) =>
//                 `text-lg duration-200 ${
//                   isActive ? "text-orange-700 font-semibold" : "text-gray-700"
//                 } hover:text-orange-700`
//               }
//             >
//               Story
//             </NavLink>

//             <NavLink
//               to="/home/englishstory"
//               className={({ isActive }) =>
//                 `text-lg duration-200 ${
//                   isActive ? "text-orange-700 font-semibold" : "text-gray-700"
//                 } hover:text-orange-700`
//               }
//             >
//               English Story
//             </NavLink>
//           </div>

// <ThemeBtn />

//           {/* Logout Button */}
//           <Link
//             to="/"
//             className="hidden lg:block bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg text-sm px-5 py-2 transition"
//           >
//             Logout
//           </Link>

//         </div>
//       </nav>
//     </header>
//   );
// }
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-white dark:bg-black">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-lg" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              My Website
            </span>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-10">

            <NavLink
              to="/home"
              className={({ isActive }) =>
                `text-lg duration-200 ${
                  isActive
                    ? "text-orange-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-orange-700`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/home/sayri"
              className={({ isActive }) =>
                `text-lg duration-200 ${
                  isActive
                    ? "text-orange-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-orange-700`
              }
            >
              Sayri
            </NavLink>

            <NavLink
              to="/home/story"
              className={({ isActive }) =>
                `text-lg duration-200 ${
                  isActive
                    ? "text-orange-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-orange-700`
              }
            >
              Story
            </NavLink>

            <NavLink
              to="/home/englishstory"
              className={({ isActive }) =>
                `text-lg duration-200 ${
                  isActive
                    ? "text-orange-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-orange-700`
              }
            >
              English Story
            </NavLink>
          </div>

          {/* Theme Toggle */}
          <ThemeBtn />

          {/* Logout Button */}
          <Link
            to="/"
            className="hidden lg:block bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg text-sm px-5 py-2 transition"
          >
            Logout
          </Link>

        </div>
      </nav>
    </header>
  );
}