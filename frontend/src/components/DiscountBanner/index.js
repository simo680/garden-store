import s from "./DiscountBanner.module.scss";
import Button from "../../UI/Button";

function DiscountForm({ autoScroll }) {
  return (
    <div className={s.banner}>
      <div className={s.bannerContent}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <Button
          title={"Check out"}
          background={"green"}
          size={"small"}
          onClick={autoScroll}
        ></Button>
      </div>
    </div>
  );
}

export default DiscountForm;