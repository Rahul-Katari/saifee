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
import Error from "./components/pages/Error";
import Home from "./components/home/Home";
import Contact from "./components/pages/Contact";
import Excellence from "./components/pages/Excellence";
import BestDoctors from "./components/pages/BestDoctors";
import Facilities from "./components/pages/Facilities";
import ExcellenceDetails from "./components/pages/ExcellenceDetails";
import DoctorDetails from "./components/pages/DoctorDetail";
import Blogs from "./components/pages/Blogs";
import Careers from "./components/pages/Careers";
import PatientsVisitors from "./components/pages/PatientsVisitors";
import Landing from "./components/pages/Landing";
import BlogsDetail from "./components/pages/BlogsDetail";

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
          <Route path="/excellenceDetails" element={<ExcellenceDetails />} />
          <Route path="/doctorDetails" element={<DoctorDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogsDetail" element={<BlogsDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/patientsVisitors" element={<PatientsVisitors />} />
          <Route path="/landing" element={<Landing />} />
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
