import FooterCard from "../FooterCard/FooterCard";
import Instagram from "./images/instagram.svg";
import Whatsapp from "./images/whatsapp.svg";

import s from "./Footer.module.scss";
import Map from "../Map/Map";

const Footer = () => (
  <footer className={s.footer}>
    <h2 className={s.title}>Contact</h2>
    <div className={s.cards}>
      <FooterCard title="Phone">
        <a className={s.tel} href="tel:+7(499)350‑66-04">
          +7(499)350‑66-04
        </a>
      </FooterCard>

      <FooterCard title="Socials">
        <div className={s.icons}>
          <Whatsapp className={s.icon} />
          <Instagram className={s.icon} />
        </div>
      </FooterCard>

      <FooterCard title="Address">
        <address className={s.text}>
          Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
        </address>
      </FooterCard>

      <FooterCard title="Working Hours">
        <p className={s.text}>24 hours a day</p>
      </FooterCard>
    </div>

    <Map />
  </footer>
);

export default Footer;
