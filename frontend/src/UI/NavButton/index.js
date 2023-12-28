import s from "./NavButton.module.scss";
import { Link } from "react-router-dom";

function NavButton({ title, link, linkText, salesRef }) {
  return (
    <div className={s.btnall} ref={salesRef}>
      <h2>{title}</h2>
      <div className={s.btnAndline}>
        <div className={s.line}></div>
        <Link
          className={s.title}
          to={link}
          onClick={() => window.scrollTo(0, 0)}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default NavButton;
