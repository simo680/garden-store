import s from "./Button.module.scss";

function Button({ title, background, size, ...otherProps }) {
  return (
    <button {...otherProps} className={`${s.button}  ${s[background]} ${s[size]}`}>
      {title}
    </button>
  );
}

export default Button;
