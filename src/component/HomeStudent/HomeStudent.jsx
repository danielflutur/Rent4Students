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
import ProfileStudent from "../Students/ProfileStudent";
import HomecHeroStudent from "../HomeHeroStudent";
import Students from "../Students";

function HomeStudent() {
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
              <HomecHeroStudent />
              <Students />
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

export default HomeStudent;
