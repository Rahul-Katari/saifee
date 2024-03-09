import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import About from "./components/pages/About";
import Error from "./components/Error";
import Home from "./components/Home/Home";
import Contact from "./components/Contact";
import Excellence from "./components/Excellence";
import BestDoctors from "./components/BestDoctors";
import Facilities from "./components/Facilities";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/excellence",
        element: <Excellence />,
      },
      {
        path: "/bestdoctors",
        element: <BestDoctors />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Inside your component where you wrap your routes with BrowserRouter
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Main App route */}
        <Route
          path="/"
          element={<App />}
          // Specify the error route element
          fallback={<Error />}
        >
          {/* Nested routes for App */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/excellence" element={<Excellence />} />
          <Route path="/bestdoctors" element={<BestDoctors />} />
          <Route path="/facilities" element={<Facilities />} />
        </Route>
        {/* Additional top-level routes */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
