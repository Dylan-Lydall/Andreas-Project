import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};
export default Navbar;
