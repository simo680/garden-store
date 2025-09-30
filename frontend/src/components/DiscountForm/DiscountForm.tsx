import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { discountSchema, type DiscountFormData } from "./schema";
import { sendDiscountForm } from "../../api/discount";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";

import s from "./DiscountForm.module.scss";

const DiscountForm = () => {
  const { register, handleSubmit } = useForm<DiscountFormData>({
    resolver: yupResolver(discountSchema),
  });

  const onSubmit = async (data: DiscountFormData) => {
    try {
      await sendDiscountForm(data);
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={s.input}
        appearance="secondary"
        type="text"
        placeholder="Name"
        {...register("name")}
      />
      <Input
        className={s.input}
        appearance="secondary"
        type="tel"
        placeholder="Phone Number"
        {...register("phone")}
      />
      <Input
        className={s.input}
        appearance="secondary"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <Button type="submit" appearance="secondary">
        Get a discount
      </Button>
    </form>
  );
};

export default DiscountForm;
