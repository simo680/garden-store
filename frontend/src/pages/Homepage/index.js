// import s from "./HomePage.module.scss";
import DiscountForm from "../../components/DiscountForm";
import DiscountBanner from "../../components/DiscountBanner";
import Categories from "../../components/Categories";
import NavButton from "../../UI/NavButton";
function HomePage() {
  return (
    <main>
      <DiscountBanner/>
      <NavButton title={'Categories'} link={'/categories/all'} linkText={'All categories'}/>
      <Categories length={4}/>
      <DiscountForm />
      <NavButton title={'Sale'} link={'/products/all'} linkText={'All sales'}/>
    </main>
  );
}

export default HomePage;
