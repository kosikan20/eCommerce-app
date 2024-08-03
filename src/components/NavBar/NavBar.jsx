import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav style={navbarStyle}>
      <ul className={classes.container}>
        <div className={classes.home}>
          <li>
            <Link to="/">Summer.</Link>
          </li>
        </div>
        <div className={classes.links}>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingBag />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
