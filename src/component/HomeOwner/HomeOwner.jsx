import { useEffect, useState } from "react";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import About from "../About/About";
import Agents from "../Agents";
import Blog from "../Blog";
import DownloadApp from "../DownloadApp";
import Features from "../Features";
import HomecHero from "../HomecHero";
import LatestProperty from "../LatestProperty";
import Preloader from "../Loader";
import FaqSection from "../Faq/FaqSection";
import PageLayout from "../PageLayout/PageLayout";
import ApiService from "../../services/ApiService";
import { ListingsProvider } from "../../context/ListingsProvider";
import { ListingFeaturesProvider } from "../../context/ListingFeaturesProvider";
import HomecHeroOwner from "../HomecHeroOwner";
import PricingOwner from "../PricingOwner";


function HomeOwner() {
  const [lisitngs, setListings] = useState([]);
  const [isLoading, setisLoadingg] = useState(true);

  useEffect(() => {
    ApiService.get("Listings")
      .then((response) => {
        setListings(response.data);
        setisLoadingg(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
