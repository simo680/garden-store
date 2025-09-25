import s from "./FooterCard.module.scss";

interface FooterCardProps {
  title: string;
  children: React.ReactNode;
}

const FooterCard = ({ title, children }: FooterCardProps) => (
  <div className={s.card}>
    <h3 className={s.title}>{title}</h3>
    {children}
  </div>
);

export default FooterCard;
