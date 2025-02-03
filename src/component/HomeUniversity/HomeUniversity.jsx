import { useEffect, useState } from "react";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import About from "../About/About";
import Features from "../Features";
import Preloader from "../Loader";
import FaqSection from "../Faq/FaqSection";
import PageLayout from "../PageLayout/PageLayout";
import HomecHeroUniversity from "../HomecHeroUniversity";
import PricingUniversity from "../PricingUniversity.jsx";
import { useAuth } from "../../context/AuthProvider.jsx";
import { useUser } from "../../context/AuthDetailsProvider.jsx";
import { FacultyProvider } from "../../context/FacultyProvider.jsx";
import ApiService from "../../services/ApiService.jsx";

function HomeUniversity() {
  const [isLoading, setisLoadingg] = useState(true);
  const { auth } = useAuth();
  const { setUser } = useUser();

  useEffect(() => {
    if (auth) {
      ApiService.get(`Universities/${auth.id}`)
        .then((response) => {
          setUser(response.data);
          setisLoadingg(false);
        })
        .catch((error) =>
          console.error("Error fetching student details:", error)
        );
    }
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <PageLayout>
          <FacultyProvider>
            <HomecHeroUniversity />
            <PricingUniversity />
            <Features />
            <About />
            <FaqSection />
            <Footer />
            <GoTopBtn />
          </FacultyProvider>
        </PageLayout>
      </>
    );
  }
  return component;
}

export default HomeUniversity;
