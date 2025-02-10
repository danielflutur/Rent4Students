import { useEffect, useState } from "react";
import Footer from "../Footer/index.jsx";
import GoTopBtn from "../Button/GoTopBtn.jsx";
import About from "../About/About.jsx";
import Features from "../Features/index.jsx";
import Preloader from "../Loader/index.jsx";
import FaqSection from "../Faq/FaqSection.jsx";
import PageLayout from "../PageLayout/PageLayout.jsx";
import { useAuth } from "../../context/AuthProvider.jsx";
import { useUser } from "../../context/AuthDetailsProvider.jsx";
import { FacultyProvider } from "../../context/FacultyProvider.jsx";
import ApiService from "../../services/ApiService.jsx";
import HomecHeroSecretary from "../HomecHeroSecretary/index.jsx";

function HomeSecretary() {
  const [isLoading, setisLoadingg] = useState(true);
  const { auth } = useAuth();
  const { setUser } = useUser();

  useEffect(() => {
    if (auth) {
      ApiService.get(`Faculties/${auth.id}`)
        .then((response) => {
          setUser(response.data);
          setisLoadingg(false);
        })
        .catch((error) =>
          console.error("Error fetching faculty details:", error)
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
            <HomecHeroSecretary />
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

export default HomeSecretary;
