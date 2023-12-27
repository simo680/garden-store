// import s from "./HomePage.module.scss";
import DiscountForm from "../../components/DiscountForm";
import DiscountBanner from "../../components/DiscountBanner";
import CategoriesPage from "../CategoriesPage";
function HomePage() {
  return (
    <main>
      <DiscountBanner/>
      <CategoriesPage length={4}/>
      <DiscountForm />
      {/* LineButton */}
      {/* LineButton */}
      {/* ProductList */}
    </main>
  );
}

export default HomePage;
