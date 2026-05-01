import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

import { contactSchema, type ContactFormData } from './schema';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';

import s from './ContactForm.module.scss';
import type { ContactFormProps } from './type';

const ContactForm = ({
  className,
  appearance = 'primary',
  fetch,
  buttonTitle,
}: ContactFormProps) => {
  const { register, handleSubmit } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch(data);
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form
      className={clsx(s.form, s[appearance], className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={s.input}
        appearance={appearance}
        type='text'
        placeholder='Name'
        {...register('name')}
      />
      <Input
        className={s.input}
        appearance={appearance}
        type='tel'
        placeholder='Phone Number'
        {...register('phone')}
      />
      <Input
        className={s.input}
        appearance={appearance}
        type='email'
        placeholder='Email'
        {...register('email')}
      />
      <Button fullWidth={true} type='submit' appearance={appearance}>
        {buttonTitle}
      </Button>
    </form>
  );
};

export default ContactForm;
