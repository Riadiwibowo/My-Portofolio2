import "/src/styles/index.css";

import LandingPage from "./features/landing-page";
import Layout from "./components/layout";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
