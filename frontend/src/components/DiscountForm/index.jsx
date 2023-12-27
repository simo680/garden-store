import s from "./DiscountForm.module.scss";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button";

function DiscountForm() {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  let inputName = {
    ...register("Name", {
      required: "Name Required",
      minLength: {
        value: 3,
        message: "The length of the name should not exceed 10 characters",
      },
      maxLength: {
        value: 10,
        message: "The name must not exceed more than 10 characters",
      },
    }),
  };

  let inputPhone = {
    ...register("Phone", {
      required: "Phone number required",
      pattern: {
        value: /^(\+7|8)\s?\(?(\d{3})\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
        message: "The phone must match (+7)(XXX)XXX-XXX",
      },
    }),
  };

  let inputEmail = {
    ...register("Email", {
      required: "Email Required",
      pattern: {
        value:
          /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
        message: "Invalid email address is specified",
      },
    }),
  };

  return (
    <div className={s.discountForm}>
      <h2>5% off on the first order</h2>
      <div className={s.group}>
        <div className={s.hands}></div>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <input {...inputName} type="text" placeholder="Name" />
          {errors.Name && (
            <p className={`${s.errortext}`}>{errors.Name.message}</p>
          )}
          <input {...inputPhone} type="number" placeholder="Phone Number" />
          {errors.Phone && (
            <p className={`${s.errortext}`}>{errors.Phone.message}</p>
          )}
          <input {...inputEmail} type="text" placeholder="Email" />
          {errors.Email && (
            <p className={`${s.errortext}`}>{errors.Email.message}</p>
          )}
          <Button
            onClick={() => handleSubmit(onSubmit)}
            type="submit"
            size="big"
            color="white"
            title="Get a discount"
          />
        </form>
      </div>
    </div>
  );
}

export default DiscountForm;
