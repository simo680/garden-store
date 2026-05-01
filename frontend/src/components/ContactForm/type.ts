import type { ContactFormData } from './schema';

export type ContactFormProps = {
  fetch: (data: ContactFormData) => Promise<void>;
  appearance: 'primary' | 'secondary';
  buttonTitle: string;
  className?: string;
};
