import { useNavigate } from "react-router";

import Button from "../../components/ui/Button/Button";

import NotFoundImage from "./images/404.png";

import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src={NotFoundImage} alt="Not Found image" />
      </div>
      <div className={s.text}>
        <h2 className={s.title}>Page Not Found</h2>
        <p className={s.description}>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
      </div>
      <Button className={s.button} onClick={() => navigate("/")}>
        <a className={s.link}>Go home</a>
      </Button>
    </div>
  );
};

export default NotFoundPage;
