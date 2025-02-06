import { useEffect, useState } from "react";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import About from "../About/About";
import LatestProperty from "../LatestProperty";
import Preloader from "../Loader";
import FaqSection from "../Faq/FaqSection";
import PageLayout from "../PageLayout/PageLayout";
import ApiService from "../../services/ApiService";
import { ListingsProvider } from "../../context/ListingsProvider";
import { ListingFeaturesProvider } from "../../context/ListingFeaturesProvider";
import HomecHeroOwner from "../HomecHeroOwner";
import PricingOwner from "../PricingOwner";
import { useAuth } from "../../context/AuthProvider";
import { useUser } from "../../context/AuthDetailsProvider";

function HomeOwner() {
  const [isLoading, setisLoadingg] = useState(true);
  const { auth } = useAuth();
  const { setUser } = useUser();
  
  useEffect(() => {
    if (auth) {
      ApiService.get(`PropertyOwners/${auth.id}`)
        .then((response) => {
          setUser(response.data);
          setisLoadingg(false);
        })
        .catch((error) =>
          console.error("Error fetching owner details:", error)
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
              <HomecHeroOwner />
              <PricingOwner />
              <LatestProperty />
              <About />
              <FaqSection />
              <Footer />
              <GoTopBtn />
            </ListingFeaturesProvider>
          </ListingsProvider>
        </PageLayout>
      </>
    );
  }
  return component;
}

export default HomeOwner;
