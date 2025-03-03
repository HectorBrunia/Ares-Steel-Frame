import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loading from "./Components/Loading";
const Layout = lazy(() => import("./layout/Layout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const TrabajaConNos = lazy(() => import("./pages/TrabajaConNos.jsx"));
const Contacto = lazy(() => import("./pages/Contacto.jsx"));

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Ares Steel Frame - Construcción Moderna</title>
          <meta
            name="description"
            content="Construcción Moderna, Eficiente y Confiable"
          />

          {/* Open Graph (Facebook, WhatsApp, LinkedIn, etc.) */}
          <meta property="og:title" content="Ares Steel Frame" />
          <meta
            property="og:description"
            content="Construcción Moderna, Eficiente y Confiable"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dquci1gzf/image/upload/v1740990703/yxagaxbyhmadpibqxkgl.jpg"
          />
          <meta property="og:url" content="https://aressteelframe.com/" />
          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ares Steel Frame" />
          <meta
            name="twitter:description"
            content="Construcción Moderna, Eficiente y Confiable"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dquci1gzf/image/upload/v1740990703/yxagaxbyhmadpibqxkgl.jpg"
          />
        </Helmet>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
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
