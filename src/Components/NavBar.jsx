import { Link } from "react-scroll";
import { ImInstagram } from "react-icons/im";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className="bg-red-600 lg:flex hidden fixed z-50 w-full text-white felx-col px-20 py-2  justify-between items-center">
        <div>
          <img
            className="w-20 h-20 ml-8 rounded-full grow"
            src="/logo.jpeg"
            alt=""
          />
        </div>
        <ul className="flex gap-8">
          <li>
            <Link
              to="nosotros"
              smooth={true}
              duration={500}
              spy={true}
              style={{ transition: "all 1s ease-in-out" }}
              activeClass="text-lg font-bold"
              className="cursor-pointer"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              style={{ transition: "all 1s ease-in-out" }}
              spy={true}
              activeClass="text-lg font-bold"
              className="cursor-pointer"
            >
              Nuestros Servicios
            </Link>
          </li>
          <li>
            <Link
              to="proyectos"
              smooth={true}
              duration={500}
              style={{ transition: "all 1s ease-in-out" }}
              spy={true}
              activeClass="text-lg font-bold"
              className="cursor-pointer"
            >
              Nuestros Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="Sistemas Constructivos"
              smooth={true}
              duration={500}
              style={{ transition: "all 1s ease-in-out" }}
              spy={true}
              activeClass="text-lg font-bold "
              className="cursor-pointer"
            >
              Sistemas Constructivos
            </Link>
          </li>
          <li>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              style={{ transition: "all 1s ease-in-out" }}
              spy={true}
              activeClass="text-lg font-bold"
              className="cursor-pointer"
            >
              Contáctanos
            </Link>
          </li>
        </ul>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
            className="flex rounded-"
          >
            <ImInstagram size={40} />
          </a>
        </div>
      </nav>
      <nav className="bg-red-600 fixed z-50 w-full lg:hidden text-white flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <img
            className="w-16 h-16 rounded-full"
            src="/logo.jpeg"
            alt="Logo Ares Steel Frame"
          />
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menú desplegable */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-red-600 text-center flex flex-col gap-6 py-8 shadow-lg rounded-b-xl"
          >
            {[
              { to: "nosotros", text: "Sobre Nosotros" },
              { to: "servicios", text: "Nuestros Servicios" },
              { to: "Sistemas Constructivos", text: "Sistemas Constructivos" },
              { to: "proyectos", text: "Nuestros Proyectos" },
              { to: "contacto", text: "Contáctanos" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="font-bold text-lg"
                  className="cursor-pointer text-white text-xl"
                  onClick={() => setIsOpen(false)} // Cerrar menú al hacer clic
                >
                  {link.text}
                </Link>
              </li>
            ))}

            {/* Instagram */}
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
                className="flex justify-center items-center gap-2"
              >
                <ImInstagram size={30} />
                Instagram
              </a>
            </li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
