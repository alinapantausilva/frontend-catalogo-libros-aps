import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <Link to="/">📚 Bibliocat</Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;