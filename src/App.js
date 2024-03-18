import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";

function App() {
  AOS
    .init
    // { duration: 2000 }
    ();
  return (
    <>
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
