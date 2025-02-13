import { Link } from "react-router-dom";
import { MdLocalConvenienceStore } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <MdLocalConvenienceStore size={80} />
        </Link>
      </div>
      <h1>Pokemon Showdown Database</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Pokemon</Link>
          </li>
          <li>
            <Link to="/trainers">Trainers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
