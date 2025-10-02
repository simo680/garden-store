import * as yup from "yup";

const phoneRegExp = /^(?:\+7|8)?9(?:\d{9})$/;

export const contactSchema = yup.object().shape({
  name: yup.string().trim().min(2).max(100).required(),
  phone: yup.string().matches(phoneRegExp).required(),
  email: yup.string().email().required(),
});

export type ContactFormData = yup.InferType<typeof contactSchema>;
