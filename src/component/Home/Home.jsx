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
import PropertyListing from "../PropertyListing";
import Preloader from "../Loader";
import FaqSection from "../Faq/FaqSection";
import PageLayout from "../PageLayout/PageLayout";

function Home() {
  const [isLoading, setisLoadingg] = useState(true);

  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <PageLayout>
          <HomecHero />
          <PropertyListing />
          <About />
          <LatestProperty />
          <Features />
          <Agents />
          <FaqSection />
          <DownloadApp />
          <Blog />
          <Footer />
          <GoTopBtn />
        </PageLayout>
      </>
    );
  }
  return component;
}

export default Home;
