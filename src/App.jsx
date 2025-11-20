//cd /Users/nikitasachan/Desktop/MyContent/content
// import { useState, useEffect } from "react";
// import "./index.css";
// import "./App.css";
// import ThemeBtn from "./component/themeBtn.jsx";
// import { ThemeProvider } from "./contexts/themeContex.jsx";

// function App() {
//   const [ThemeMode, setThemeMode] = useState("light");
//   const darkTheme = () => {
//     setThemeMode('dark');
//   };
//   const whiteTheme = () => {
//     setThemeMode('light');
//   };
//   useEffect(() => {
//      document.documentElement.setAttribute("data-theme", ThemeMode);
//   }, [ThemeMode]);
//     return (
//     <ThemeProvider value={{ themeMode: ThemeMode, darkTheme, whiteTheme }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//             </div>
      
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
 