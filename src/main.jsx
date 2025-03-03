import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Loading from "./Components/Loading.jsx";
import { HelmetProvider } from "react-helmet-async";
//import Contactanos from "./pages/Contactanos.jsx";
const Layout = lazy(() => import("./layout/Layout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const TrabajaConNos = lazy(() => import("./pages/TrabajaConNos.jsx"));
const Contacto = lazy(() => import("./pages/Contacto.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="contactanos" element={<Contacto />} />
              <Route path="trabajaconnos" element={<TrabajaConNos />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
