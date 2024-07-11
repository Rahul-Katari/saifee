import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
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
import DoctorDetails from "./components/pages/DoctorDetails";
import Blogs from "./components/pages/Blogs";
import Careers from "./components/pages/Careers";
import PatientsVisitors from "./components/pages/PatientsVisitors";
import Landing from "./components/pages/Landing";
import BlogsDetail from "./components/pages/BlogsDetail";
import Videos from "./components/pages/Videos";
import HealthCheckup from "./components/pages/HealthCheckUp";
import ExcellenceContentTabs from "./components/pages/ExcellenceContentTabs";
import HealthCheckUpForm from "./components/pages/healthCheckUpForm";
import AppointmentModalForm from "./components/AppointmentModalForm";
import { BlogDataProvider } from "./controller/blogDataContext";
import { ServicesDataProvider } from "./controller/servicesDataContext";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import FaqS from "./components/pages/faqs";

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
    <BlogDataProvider>
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
            <Route
              path="/"
              element={
                <ServicesDataProvider>
                  <Home />
                </ServicesDataProvider>
              }
            />
            <Route
              path="/home"
              element={
                <ServicesDataProvider>
                  <Home />
                </ServicesDataProvider>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/centerofexcellence"
              element={
                <ServicesDataProvider>
                  <Excellence />
                </ServicesDataProvider>
              }
            />
            <Route path="/bestDoctors" element={<BestDoctors />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route
              path="/centerofexcellence/:serviceId"
              element={
                <ServicesDataProvider>
                  <ExcellenceDetails />
                </ServicesDataProvider>
              }
            />
            <Route
              path="/bestDoctorsDetails/:doctorUrl"
              element={<DoctorDetails />}
            />
            <Route path="/bestDoctorsDetails" element={<DoctorDetails />} />
            {/* <Route
              path="/bestDoctorsDetailsManasa"
              element={<DoctorDetailsManasa />}
            />
            <Route
              path="/bestDoctorsDetailsUday"
              element={<DoctorDetailsUday />}
            /> */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogsDetail/:blogid" element={<BlogsDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/patientsVisitors" element={<PatientsVisitors />} />
            <Route path="/landing/:doctorUrl" element={<Landing />} />
            <Route
              path="/bookAppointment"
              element={<AppointmentModalForm modal={false} />}
            />
            <Route path="/videos" element={<Videos />} />
            <Route path="/healthCheckup" element={<HealthCheckup />} />
            <Route
              path="/healthCheckupForm/:packageId"
              element={<HealthCheckUpForm />}
            />
            <Route
              path="/excellenceContent"
              element={<ExcellenceContentTabs />}
            />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/faqs" element={<FaqS />} />
          </Route>
          {/* Additional top-level routes */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </BlogDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
