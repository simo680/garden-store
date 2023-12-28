import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Media/logo.svg";
import {ReactComponent as Basket } from './Media/basket.svg'
import s from "./Header.module.scss";

function Header() {

  const navigate = useNavigate();


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

      <div className={s.basket} onClick={() => navigate('/basket')}>
            <Basket/>
          </div>
    </header>
  );
}

export default Header;
