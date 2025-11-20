
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/themeContex.jsx";
import { LoginPage } from "./pages/loginPage.jsx";
import HomePage from "./pages/homePage.jsx";
import Sayri from "./component/writings/sayri.jsx";
import Story from "./component/writings/story.jsx";
import EnglishStory from "./component/writings/englishWrting.jsx";
import { Layout } from "./layout.jsx";

function MainRouter() {
  // Load theme from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/home"
          element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route index element={<HomePage />} />
          <Route path="sayri" element={<Sayri />} />
          <Route path="story" element={<Story />} />
          <Route path="englishstory" element={<EnglishStory />} />
        </Route>

        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  </StrictMode>
);
