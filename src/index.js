import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import { Home } from "./pages/Home";
import { Concepts, ProjectOverview } from "./pages/Concepts";
import { AboutMe } from "./pages/AboutMe";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/concepts",
    element: <Concepts />,
  },
  {
    path: "/concepts/:id",
    element: <ProjectOverview />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/services",
    element: <Services />,
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
