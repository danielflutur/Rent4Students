import { useEffect, useState } from "react";
import Preloader from "../Loader";
import Breadcrumbs from "../Breadcrumbs";
import GoTopBtn from "../Button/GoTopBtn";
import Footer from "../Footer";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import PropertyGrid from "./PropertyGrid";
import PageLayout from "../PageLayout/PageLayout";
import { ListingFeaturesProvider } from "../../context/ListingFeaturesProvider";

function Property() {
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
          <Breadcrumbs title="Proprietăți">
            <HistoryLinks link="home" text="Acasa" />
            <HistoryLinks
              link="property"
              text="Proprietăți"
              isActive={true}
            />
          </Breadcrumbs>
          <ListingFeaturesProvider>
          <PropertyGrid />
          </ListingFeaturesProvider>
          <Footer />
          <GoTopBtn />
        </PageLayout>
      </>
    );
  }

  return component;
}

export default Property;
