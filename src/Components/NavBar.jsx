export const NavBar = () => {
  return (
    <header>
      <nav className="bg-red-600 text-white felx-col p-4 flex gap-52 items-center">
        <div>
          <a href="/">
            <h1 className="text-3xl">Ares Steel Frame</h1>
          </a>
        </div>
        <ul className="flex-col w-[50%] md:flex-row flex justify-between items-center">
          <li>
            <a href="/">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/about">Nuestros servicios</a>
          </li>
          <li>
            <a href="/about">Proyectos</a>
          </li>
          <li>
            <a href="/contact">Contactanos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
