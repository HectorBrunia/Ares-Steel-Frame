import { useLocation } from "react-router";
import { Link } from "react-scroll";
const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const links = [
    { to: "nosotros", label: "Sobre Nosotros" },
    { to: "servicios", label: "Nuestros Servicios" },
    { to: "proyectos", label: "Proyectos" },
    { to: "contacto", label: "Contáctanos" },
  ];
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.jpeg"
            alt="Ares Steel Framing"
            className="w-20 h-20 mb-4 rounded-full"
          />
          <p className="text-center md:text-left text-gray-400">
            Construcción en seco con estructura de acero. Calidad y compromiso
            en cada proyecto.
          </p>
        </div>
        {/* Enlaces rápidos */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                {isHome ? (
                  <Link
                    to={isHome ? to : `/${to}`}
                    className="hover:text-red-500 transition"
                    smooth={true}
                    duration={500}
                    spy={true}
                  >
                    {label}
                  </Link>
                ) : (
                  <a href={`/#${to}`} rel="noopener noreferrer">
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <a
            href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-gray-500 mt-8">
        © 2025 Ares Steel Framing. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
