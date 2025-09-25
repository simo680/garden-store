import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
