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
    if (!id) return; // Prevent fetching if id is missing

    // Fetch listing details based on id
    setIsLoading(true); // Ensure loading state is true before fetching
    ApiService.get(`Listings/${id}`)
      .then((response) => {
        setProperty(response.data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching property details:", error);
        setError("Failed to load property details"); // Set error message
        setIsLoading(false); // Set loading to false on error
      });
  }, [id]);

  // Show the loader until the property data is loaded or the request fails
  if (isLoading) {
    return <Preloader />;
  }

  // If there's an error, display it
  if (error) {
    return <div>{error}</div>; // Display error message if there is one
  }

  // If property is null, show a fallback message
  if (!property) {
    return <div>Property not found</div>; // Display message if property is null
  }

  return (
    <PageLayout>
      <Breadcrumbs title="Property Details">
        <HistoryLinks link="home" text="Home" />
        <HistoryLinks link="property" text="Latest Properties" />
        <HistoryLinks
          link={`property-single/${id}`}
          text={property?.title || "Property Details"}
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
      <Footer />
      <GoTopBtn />
    </PageLayout>
  );
}

export default PropertySingle;
