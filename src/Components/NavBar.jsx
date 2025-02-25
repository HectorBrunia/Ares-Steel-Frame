import { Link } from "react-scroll";
import { ImInstagram } from "react-icons/im";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const links = [
  { to: "nosotros", text: "Sobre Nosotros" },
  { to: "servicios", text: "Nuestros Servicios" },
  { to: "Sistemas Constructivos", text: "Sistemas Constructivos" },
  { to: "proyectos", text: "Nuestros Proyectos" },
  { to: "contacto", text: "Contáctanos" },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className="bg-red-600 lg:flex hidden fixed z-50 w-full text-white flex-row px-20 py-2 justify-between items-center">
        <div>
          <NavLink to="/" className="cursor-pointer">
            <img
              className="w-20 h-20 ml-8 rounded-full"
              src="/logo.jpeg"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="relative">
          <NavLink
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            to="/"
            className="cursor-pointer p-4 px-8 text-xl "
          >
            Inicio
          </NavLink>
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`absolute w-[260px] flex flex-col  bg-red-600 top-8 p-5 -left-5 ${!isDropdownOpen && "hidden"}`}
          >
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {links.map((link, index) => (
                  <li key={index} className="hover:scale-110  my-2 text-left">
                    <Link
                      to={`${link.to}`}
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass="font-bold text-lg"
                      className="cursor-pointer text-white text-lg  "
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
          <NavLink
            to="/contactanos"
            className="cursor-pointer text-xl p-4 px-8"
          >
            Contáctanos
          </NavLink>

          <NavLink
            to="/trabajaconnos"
            className="cursor-pointer text-xl p-4 px-8"
          >
            Trabaja con nosotros
          </NavLink>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
            className="flex"
          >
            <ImInstagram size={40} />
          </a>
        </div>
      </nav>
      <nav className="bg-red-600 fixed z-50 w-full lg:hidden text-white flex justify-between items-center px-6 py-4">
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
            {links.map((link, index) => (
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
