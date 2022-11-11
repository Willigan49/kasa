import Error from "../pages/Error/index";
import About from "../pages/About";
import Home from "../pages/Home/Index";
import { createBrowserRouter } from "react-router-dom";
import Rental from "../pages/Rental";
import { App } from "../index";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/rental/:id",
          element: <Rental />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);