import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
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
