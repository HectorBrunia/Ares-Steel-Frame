import { Link } from "react-scroll";
import { ImInstagram } from "react-icons/im";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router";

const links = [
  { to: "nosotros", text: "Sobre Nosotros" },
  { to: "servicios", text: "Nuestros Servicios" },
  { to: "Sistemas Constructivos", text: "Sistemas Constructivos" },
  { to: "proyectos", text: "Nuestros Proyectos" },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className="bg-red-600 lg:flex hidden fixed z-50 w-full text-white flex-row px-20 py-2 justify-between items-center">
        <div>
          <NavLink to="/" className="cursor-pointer">
            <img
              className="w-20 h-20 ml-8 rounded-full"
              src="https://res.cloudinary.com/dquci1gzf/image/upload/v1740990703/yxagaxbyhmadpibqxkgl.jpg"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="relative">
          <NavLink
            onMouseEnter={() => {
              if (location.pathname === "/") {
                setIsDropdownOpen(true);
              }
            }}
            onMouseLeave={() => setIsDropdownOpen(false)}
            to="/"
            className={({ isActive }) =>
              ` p-2 px-8 text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
            }
          >
            Inicio
          </NavLink>
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`absolute w-[220px] flex flex-col  bg-red-600 top-[39px] p-4 -left-5 ${!isDropdownOpen && "hidden"}`}
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
                      onClick={() => {
                        setIsDropdownOpen(false);
                      }}
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
            className={({ isActive }) =>
              ` p-2 px-8 text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
            }
          >
            Contáctanos
          </NavLink>
          <NavLink
            to="/viviendas"
            className={({ isActive }) =>
              ` p-2 px-8 text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
            }
          >
            Viviendas
          </NavLink>
          <NavLink
            to="/trabajaconnos"
            className={({ isActive }) =>
              ` p-2 px-8 text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
            }
          >
            Trabaja con nosotros
          </NavLink>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
            className="flex flex-col justify-center items-center"
          >
            <ImInstagram size={40} />
            instagram
          </a>
        </div>
      </nav>
      <nav className="bg-red-600 fixed z-50 w-full lg:hidden text-white flex justify-between items-center px-6 py-4">
        <NavLink to="/" className="cursor-pointer z-20">
          <img
            className="w-20  h-20 rounded-full"
            src="https://res.cloudinary.com/dquci1gzf/image/upload/v1740990703/yxagaxbyhmadpibqxkgl.jpg"
            alt="Logo"
          />
        </NavLink>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-red-600 text-center flex flex-col gap-6 py-8 shadow-lg rounded-b-xl"
          >
            <NavLink
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
              to="/"
              className={({ isActive }) =>
                ` p-2 w-fit mx-auto text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
              }
            >
              Inicio
            </NavLink>

            {isDropdownOpen &&
              links.map((link, index) => (
                <Link
                  onClick={() => {
                    setIsDropdownOpen(false), setIsOpen(false);
                  }}
                  key={index}
                  to={`${link.to}`}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="font-bold text-lg"
                  className="cursor-pointer text-white text-lg  "
                >
                  {link.text}
                </Link>
              ))}

            <NavLink
              onClick={() => {
                setIsDropdownOpen(false), setIsOpen(false);
              }}
              to="/contactanos"
              className={({ isActive }) =>
                ` p-2 px-8 mx-auto text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
              }
            >
              Contáctanos
            </NavLink>
            <NavLink
            to="/viviendas"
            className={({ isActive }) =>
              ` p-2 px-8 text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
            }
            >
              Viviendas
            </NavLink>
            <NavLink
              onClick={() => {
                setIsDropdownOpen(false), setIsOpen(false);
              }}
              to="/trabajaconnos"
              className={({ isActive }) =>
                ` p-2 mx-auto px-8 text-xl ${isActive ? "font-bold cursor-pointer text-lg border-b-4" : " "}`
              }
            >
              Trabaja con nosotros
            </NavLink>
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
