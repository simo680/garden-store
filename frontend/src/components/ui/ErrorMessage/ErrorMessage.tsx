import s from './ErrorMessage.module.scss';

export const ErrorMessage = (props: any) => {
  const { error } = props;

  return (
    <div className={s.errorMessage}>
      <h3 className={s.errorTitle}>Ошибка: {error}</h3>
    </div>
  );
};
