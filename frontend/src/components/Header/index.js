import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Media/logo.svg";
import s from "./Header.module.scss";

function Header() {
  return (
    <header>
      <Logo />

      <nav className={s.redirects}>
        <Link to={"/"} className={s.redirect}>
          Main Page
        </Link>
        <Link to={"/categories/all"} className={s.redirect}>
          Categories
        </Link>
        <Link to={"/products/all"} className={s.redirect}>
          All products
        </Link>
        <Link to={"/products/sales"} className={s.redirect}>
          All sales
        </Link>
      </nav>

      <Link to={"/basket"}></Link>
    </header>
  );
}

export default Header;
