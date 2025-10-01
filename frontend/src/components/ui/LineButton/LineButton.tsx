import type { LineButtonProps } from "./type";

import s from "./LineButton.module.scss";
import { useNavigate } from "react-router";

const LineButton = ({ title, titleButton, path }: LineButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.lineButton}>
        <div className={s.divider}></div>
        <button className={s.button} onClick={() => navigate(path)}>
          {titleButton}
        </button>
      </div>
    </div>
  );
};

export default LineButton;
