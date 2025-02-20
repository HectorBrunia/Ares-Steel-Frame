import { Link } from "react-scroll";
import { ImInstagram } from "react-icons/im";
const NavBar = () => {
  return (
    <header>
      <nav className="bg-red-600 fixed z-10 w-full text-white felx-col px-50 py-2 flex justify-between items-center">
        <div>
          <img
            className="w-20 h-20 ml-8 rounded-full grow"
            src="/logo.jpeg"
            alt=""
          />
        </div>
        <ul className="flex gap-40">
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
              activeClass="text-lg font-bold "
              className="cursor-pointer"
            >
              Proyectos
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
    </header>
  );
};

export default NavBar;
