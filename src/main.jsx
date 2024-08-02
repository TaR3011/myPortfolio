import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Error Page not Found</div>,
  },
  { path: "/skils", element: <Skills /> },
  { path: "/projects", element: <Projects /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
