import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import AOS from "aos";
import { useBlogData } from "./controller/blogDataContext";
import { useEffect } from "react";

function App() {
  const blogData = useBlogData();
  // AOS.init({ easing: "ease-out-cubic", duration: 2000 });
  const history = useNavigate();

  useEffect(() => {
    if (window.innerWidth <= 578) {
      const generalSurgeon = document.getElementsByClassName(
        "generalSurgeon"
      )[0];
      const endocrinologist = document.getElementsByClassName(
        "endocrinologist"
      )[0];
      generalSurgeon?.classList.add("hidden");
      endocrinologist?.classList.remove("hidden");
    }
  }, [history]);
  return (
    <>
      {console.log(blogData)}
      <Header />
      {/* <Body /> */}
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
