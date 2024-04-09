import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import { useBlogData } from "./controller/blogDataContext";

function App() {
  const blogData = useBlogData();
  AOS.init({ easing: "ease-out-cubic", duration: 2000 });
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
