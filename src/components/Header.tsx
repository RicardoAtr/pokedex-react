import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold flex align-middle items-center justify-center space-x-2">
          <a href="#">Pokedex By RicardoAtr</a>
        </div>
        <ul className="flex">
          <li className="mr-4">
            <Link to="/" className="text-white">
              Pokemon
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/berries" className="text-white">
              Berries
            </Link>
          </li>
          <li>
            <Link to="/medals" className="text-white">
              Medals
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
