import React, { useState } from "react";
import Button from "../../UI/Button";
import s from "./BasketForm.module.scss";

function BasketForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={s.orderForm}>
      <div className={s.orderDetails}>
        <h2>Order details</h2>
        <p></p>
        <h1>Total</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className={s.inputField}
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone number"
          className={s.inputField}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={s.inputField}
        />
        <Button title={"Order"} />
      </form>
    </div>
  );
}

export default BasketForm;
