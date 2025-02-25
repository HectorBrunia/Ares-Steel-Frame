import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Contactanos from "./pages/Contactanos.jsx";
import Layout from "./layout/layout.jsx";
import Home from "./pages/Home.jsx";
import TrabajaConNos from "./pages/TrabajaConNos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contactanos" element={<Contactanos />} />
          <Route path="trabajaconnos" element={<TrabajaConNos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
