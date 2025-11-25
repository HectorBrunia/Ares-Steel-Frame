import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loading from "./Components/Loading";
import { Casas } from "./pages/Casas.jsx";
const Layout = lazy(() => import("./layout/Layout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const TrabajaConNos = lazy(() => import("./pages/TrabajaConNos.jsx"));
const Contacto = lazy(() => import("./pages/Contacto.jsx"));

function App() {
  return (
    <>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="viviendas" element={<Casas />} />
              <Route path="contactanos" element={<Contacto />} />
              <Route path="trabajaconnos" element={<TrabajaConNos />} />
            </Route>
          </Routes>
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default App;
