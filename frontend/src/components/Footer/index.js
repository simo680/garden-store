import Map from "../Map";
import s from "./Footer.module.scss";
import { ReactComponent as InstagramSvg } from "./Media/ic-instagram.svg";
import { ReactComponent as WhatsappSvg } from "./Media/ic-whatsapp.svg";

function Footer() {
  return (
    <footer>
      <h2>Contact</h2>
      <div className={s.cards}>
      <div className={s.info}>
        <div className={s.infoItem}>
          <span>Phone</span>
          <h3>+7 (499) 350-66-04</h3>
        </div>
        <div className={s.infoItem}>
          <span>Socials</span>
          <div className={s.socials}>
            <InstagramSvg />
            <WhatsappSvg />
          </div>
        </div>
        <div className={s.infoItem}>
          <span>Address</span>
          <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
        </div>
        <div className={s.infoItem}>
          <span>Working Hours</span>
          <h3>24 hours a day</h3>
        </div>
      </div>
      <Map/>
      </div>
    </footer>
  );
}

export default Footer;
