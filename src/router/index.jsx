import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Index";
import ErrorPage from "../pages/error-page";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    }
  ])

  export default Router;