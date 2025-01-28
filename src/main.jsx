import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster></Toaster>
      <App />
    </BrowserRouter>
  </StrictMode>
);
