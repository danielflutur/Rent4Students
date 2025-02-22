import { useEffect, useState } from "react";
import Footer from "../Footer/index.jsx";
import GoTopBtn from "../Button/GoTopBtn.jsx";
import About from "../About/About.jsx";
import Features from "../Features/index.jsx";
import Preloader from "../Loader/index.jsx";
import FaqSection from "../Faq/FaqSection.jsx";
import PageLayout from "../PageLayout/PageLayout.jsx";
import HomecHeroUniversity from "../HomecHeroUniversity/index.jsx";
import PricingUniversity from "../PricingUniversity.jsx/index.jsx";
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
