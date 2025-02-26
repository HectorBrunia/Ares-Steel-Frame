import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
//import Contactanos from "./pages/Contactanos.jsx";
import Layout from "./layout/layout.jsx";
import Home from "./pages/Home.jsx";
import TrabajaConNos from "./pages/TrabajaConNos.jsx";
import Contacto2 from "./pages/Contacto2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contactanos" element={<Contacto2 />} />
          <Route path="trabajaconnos" element={<TrabajaConNos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
