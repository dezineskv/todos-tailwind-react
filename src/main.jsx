import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Toaster></Toaster>
      <App />
    </BrowserRouter>
  </StrictMode>
);
