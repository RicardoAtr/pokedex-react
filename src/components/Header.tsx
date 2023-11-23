const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#">Pokedex</a>
        </div>
        <ul className="flex">
          <li className="mr-4">
            <a href="#features" className="text-white">
              Características
            </a>
          </li>
          <li className="mr-4">
            <a href="#download" className="text-white">
              Descargar
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
