import { useEffect, useState } from "react";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import About from "../About/About";
import LatestProperty from "../LatestProperty";
import Preloader from "../Loader";
import FaqSection from "../Faq/FaqSection";
import PageLayout from "../PageLayout/PageLayout";
import { ListingsProvider } from "../../context/ListingsProvider";
import { ListingFeaturesProvider } from "../../context/ListingFeaturesProvider";
import HomecHeroStudent from "../HomeHeroStudent";
import Students from "../Students";
import { CompatibleStudentsProvider } from "../../context/CompatibleStudentsProvider";
import { useAuth } from "../../context/AuthProvider";
import { useUser } from "../../context/AuthDetailsProvider";
import ApiService from "../../services/ApiService";

function HomeStudent() {
  const [isLoading, setisLoadingg] = useState(true);
  const { auth } = useAuth();
  const { setUser } = useUser();

  useEffect(() => {
    if (auth) {
      ApiService.get(`Students/${auth.id}`)
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
          <ListingsProvider>
            <ListingFeaturesProvider>
              <CompatibleStudentsProvider>
                <HomecHeroStudent />
                <Students />
                <LatestProperty />
                <About />
                <FaqSection />
                <Footer />
                <GoTopBtn />
              </CompatibleStudentsProvider>
            </ListingFeaturesProvider>
          </ListingsProvider>
        </PageLayout>
      </>
    );
  }
  return component;
}

export default HomeStudent;
