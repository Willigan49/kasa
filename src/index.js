import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error/index";
import About from "./pages/About";
import Home from "./pages/Home/Index";
import { createBrowserRouter } from "react-router-dom";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function Root() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
}