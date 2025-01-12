import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import Property from "./component/Property";
import PropertySingle from "./component/Property Single";
import EditProperty from "./component/Edit Property";
import AddProperty from "./component/AddProperty";
import SubmitProperty from "./component/SubmitProperty";
import Dashboard from "./component/Dashboard";
import NewsSingle from "./component/NewsSingle.jsx";
import News from "./component/News";
import AgentDetail from "./component/AgentDetail";
import OurAgents from "./component/OurAgents";
import AboutUs from "./component/About";
import Pricing from "./component/Pricing.jsx";
import PaymentMethod from "./component/PaymentMethod";
import Faq from "./component/Faq";
import Login from "./component/Login";
import ErrorPage from "./component/Error";
import Contact from "./component/Contact";
import SignUp from "./component/SignUp";
import SignUpUniversity from "./component/SignUpUniversity";
import SignUpStudent from "./component/SignUpStudent/index.jsx";
import RoleSelection from "./component/RoleSelection";
import HomeUniversity from "./component/HomeUniversity/HomeUniversity.jsx";
import PricingUniversity from "./component/PricingUniversity.jsx/index.jsx";
import ValidatePhoneNumber from "./component/ValidatePhoneNumber/ValidatePhoneNumber.jsx"
import AddFaculty from "./component/AddFaculty/index.jsx";
import Faculty from "./component/Faculty/index.jsx";
import EditFaculty from "./component/EditFaculty/index.jsx";
import WelcomeStudents from "./component/WelcomeStudents/index.jsx";
import Page1PersonalData from "./component/ProgressiveBar/Page1PersonalData.jsx";
import Page2HousingPreferences from "./component/ProgressiveBar/Page2HousingPreferences.jsx";
import ProgressiveBar from "./component/ProgressiveBar/index.jsx";
import Page3HouseRules from "./component/ProgressiveBar/Page3HouseRules.jsx";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home-university",
      element: <HomeUniversity />,
    },
    {
      path: "/property",
      element: <Property />,
    },
    {
      path: "/property-single/:id",
      element: <PropertySingle />,
    },
    {
      path: "/edit-property",
      element: <EditProperty />,
    },
    {
      path: "/add-property",
      element: <AddProperty />,
    },
    {
      path: "/submit-property",
      element: <SubmitProperty />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/blog-single",
      element: <NewsSingle />,
    },
    {
      path: "/blog",
      element: <News />,
    },
    {
      path: "/agent-detail",
      element: <AgentDetail />,
    },
    {
      path: "/our-agent",
      element: <OurAgents />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/pricing-university",
      element: <PricingUniversity />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/payment-method",
      element: <PaymentMethod />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signup-university",
      element: <SignUpUniversity />,
    },
    {
      path: "/signup-student",
      element: <SignUpStudent />,
    },
    {
      path: "/welcome-students",
      element: <WelcomeStudents />,
    },
    {
      path: "/page-1-personal-data",
      element: <Page1PersonalData />,
    },
    {
      path: "/page-2-housing-preferences",
      element: <Page2HousingPreferences />,
    },
    {
      path: "/page-3-home-rules",
      element: <Page3HouseRules />,
    },
    {
      element: <ProgressiveBar />,
    },
    {
      path: "/404",
      element: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/role-selection",
      element: <RoleSelection />,
    },
    {
      path: "/validate-phone",
      element: <ValidatePhoneNumber />,
    },
    {
      path: "/add-faculty",
      element: <AddFaculty />,
    },
    {
      path: "/faculty",
      element: <Faculty />,
    },
    {
      path: "/edit-faculty/:id",  // Define dynamic route with the ID parameter
      element: <EditFaculty />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />{" "}
    </>
  );
}

export default App;
