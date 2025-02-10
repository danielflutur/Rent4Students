import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../services/ApiService";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import Preloader from "../Loader";
import SingleSlider from "./SingleSlider";
import ThumbnailsSlider from "./ThumbnilsSlider";
import PropertyDetails from "./PropertyDetails";
import PageLayout from "../PageLayout/PageLayout";
import { ListingFeaturesProvider } from "../../context/ListingFeaturesProvider";

function PropertySingle() {
  const { id } = useParams(); // Extract id from the route
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    if (!id) return; 

    setIsLoading(true);
    ApiService.get(`Listings/${id}`)
      .then((response) => {
        setProperty(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching property details:", error);
        setError("Failed to load property details"); 
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <PageLayout>
      <Breadcrumbs title="Detalii Proprietate">
        <HistoryLinks link="home" text="Home" />
        <HistoryLinks link="property" text="Cele mai recente proprietati" />
        <HistoryLinks
          link={`property-single/${id}`}
          text={property?.title || "Detalii Proprietate"}
          isActive
        />
      </Breadcrumbs>
      <div className="pd-top-80 pd-btm-80">
        <div className="container">
          <div className="row">
            <div className="col-50">
              <SingleSlider property={property} />
              {property.photos && <ThumbnailsSlider photos={property.photos} />}
            </div>
          </div>
        </div>
      </div>
      <ListingFeaturesProvider>
        <PropertyDetails listing={property} />
      </ListingFeaturesProvider>
    </PageLayout>
  );
}

  //<Footer />
  //<GoTopBtn />

export default PropertySingle;
