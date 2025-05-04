import React from "react";
import "./App.css";
import { ThemeContext } from "./Contexts/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";
import useScroll from "./Hooks/useScroll";

function App() {
  const [scrollPosition] = useScroll();

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ThemeContext.Provider>
      <RouterProvider router={router}></RouterProvider>
      <svg
        title="Back To Top"
        className={`transition-all cursor-pointer w-10 h-10  duration-300 ease-in-out fixed bottom-[50px] right-8 ${
          scrollPosition > 1000
            ? "opacity-0 lg:opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => goToTop()}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        id="up-button"
      >
        <path d="M65.4 44.6c.8.8.8 2 0 2.8-.4.4-.9.6-1.4.6s-1-.2-1.4-.6L52 36.8V68c0 1.1-.9 2-2 2s-2-.9-2-2V36.8L37.4 47.4c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6c-.8-.8-.8-2 0-2.8l14-14 .3-.3c.1 0 .1-.1.2-.1s.1-.1.2-.1.1 0 .2-.1h1c.1 0 .1 0 .2.1.1 0 .1 0 .2.1.1 0 .1.1.2.1 0 0 .1 0 .1.1l.3.3 13.9 13.9zM95 15v70c0 5.5-4.5 10-10 10H15C9.5 95 5 90.5 5 85V15C5 9.5 9.5 5 15 5h70c5.5 0 10 4.5 10 10zm-4 0c0-3.3-2.7-6-6-6H15c-3.3 0-6 2.7-6 6v70c0 3.3 2.7 6 6 6h70c3.3 0 6-2.7 6-6V15z"></path>
      </svg>
      <Toaster />
    </ThemeContext.Provider>
  );
}

export default App;

// <!-- add this to your header -->
// <div id="google_translate_element"></div>

// <!-- to your js part -->
// <script src="script.js"></script>
//       <script type="text/javascript">
//         function googleTranslateElementInit() {
//             new google.translate.TranslateElement(
//                 {pageLanguage: 'en'},
//                 'google_translate_element'
//             );
//         }
//   </script>
//   <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
