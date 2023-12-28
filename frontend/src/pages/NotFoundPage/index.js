import { useNavigate } from "react-router-dom";
import s from "./NotFoundPage.module.scss";
import error from "./Media/404.png";
import Button from "../../UI/Button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={s.notFoundPage}>
      <div>
        <img src={error} alt="404" />
      </div>
      <h2>Page Not Found</h2>
      <p>
        We&#10076;re sorry, the page you requested could not be found. Please go
        back to the homepage.
      </p>
      <Button
        title={"Go Home"}
        background={"green"}
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default NotFoundPage;
