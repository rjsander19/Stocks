
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/stocks">
        <div>Stocks List</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
};

export default Nav;