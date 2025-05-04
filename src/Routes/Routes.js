import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Interior from "../Pages/Interior/Interior";
import HomeStage from './../Pages/HomeStage/HomeStage';
import Property from "../Pages/Property/Property";
import Portfolio from "../Pages/Portfolio/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home-staging",
        element: <HomeStage></HomeStage>,
      },
      {
        path: "/interior-design",
        element: <Interior></Interior>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/who-we-are",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/property-makeover",
        element: <Property></Property>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },

    ],
  }
]);

export default router;
