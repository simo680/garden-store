import type { FooterCardProps } from './FooterCard.props';

import s from './FooterCard.module.scss';

const FooterCard = (props: FooterCardProps) => {
  const { title, children } = props;

  return (
    <div className={s.card}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  );
};

export default FooterCard;
