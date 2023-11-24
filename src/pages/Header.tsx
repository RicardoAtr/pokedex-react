const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#">Pokedex</a>
        </div>
        <ul className="flex">
          <li className="mr-4">
            <a href="#home" className="text-white">
              Pokemon
            </a>
          </li>
          <li className="mr-4">
            <a href="#berrys" className="text-white">
              Berry
            </a>
          </li>
          <li>
            <a href="#medals" className="text-white">
              Medallas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
