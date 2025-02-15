import { Link } from "react-router-dom";
import logo from '../../assets/ult.png';

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Ultraball" width={80} height={80}/>
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
          <li>
            <Link to="/moves">Moves</Link>
          </li>
          <li>
            <Link to="/battles">Battles</Link>
          </li>
          <li>
            <Link to="/gyms">Gyms</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
