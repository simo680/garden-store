import { useNavigate } from "react-router-dom";
import s from "./NotFoundPage.module.scss";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={s.notFoundPage}>
      <div>
        <img src="./Media/404.png" alt="404" />
      </div>
      <h2>Page Not Found</h2>
      <p>
        We&#10076;re sorry, the page you requested could not be found. Please go
        back to the homepage.
      </p>
    </div>
  );
}

export default NotFoundPage;
