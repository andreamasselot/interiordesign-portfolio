import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import { Home } from "./pages/Home";
import { MyWork, ProjectOverview } from "./pages/MyWork";
import { AboutMe } from "./pages/AboutMe";
import { Prices } from "./pages/Prices";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mywork",
    element: <MyWork />,
  },
  {
    path: "/mywork/worktutu",
    element: <ProjectOverview />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/prices",
    element: <Prices />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
