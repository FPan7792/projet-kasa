import { NavLink, Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo_kasa_red.svg";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo kasa" width="130" height="auto" />
      </Link>

      <nav>
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Accueil
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            A propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
