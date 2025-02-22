import { useEffect, useState } from "react";
import PropertyDetailsBtn from "../Button/PropertyDetailsBtn";
import DetailsTab from "./DetailsTab";
import DetailsTabFeatures from "./DetailsTabFeatures";
import PropertyLocation from "../PropertyLocation";
import PropertyReview from "../PropertyReview";
import PropertyAgents from "../Agents/PropertyAgents";
import PropertyOwners from "../Owners/PropertyOwners";
import { useData } from "../../context/ListingFeaturesProvider";  // Importing context to access features

function PropertyDetails({ listing }) {
  const [activeTab, setActiveTab] = useState("Detalii Proprietate");
  const handleActive = (title) => {
    setActiveTab(title);
  };

  const { features } = useData();  // Access the features from ListingFeaturesProvider
  const [listingFeatures, setListingFeatures] = useState([]);

  // Get features based on amenitiesIds from the listing
  useEffect(() => {
    if (features && listing.amenitiesIds) {
      const filteredFeatures = features.filter((feature) =>
        listing.amenitiesIds.includes(feature.id)
      );
      setListingFeatures(filteredFeatures); // Set the filtered features based on the amenitiesIds
    }
  }, [listing.amenitiesIds, features]);

  return (
    <section
      className="pd-top-0 homec-bg-third-color pd-btm-80 homec-bg-cover"
      style={{ backgroundImage: "url('/img/property-single-bg.svg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ol-12">
            <div
              className="list-group homec-list-tabs homec-list-tabs--v2"
              id="list-tab"
              role="tablist"
            >
              <PropertyDetailsBtn
                title="Detalii Proprietate"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Locatie"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Review"
                active={activeTab}
                handleActive={handleActive}
              />
            </div>

            <div className="homec-pdetails-tab">
              <div className="tab-content">
                <DetailsTab
                  isActive={activeTab === "Detalii Proprietate"}
                  text={listing.description}
                >
                  <DetailsTabFeatures
                    title="Detalii Aditionale"
                    property={listingFeatures?.map((feature) => ({
                      [feature.name]: feature.value,
                    }))}
                  />
                </DetailsTab>
                <PropertyLocation
                  address="70 Washington Square South, New York, NY 10012, United States"
                  text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden end to main to marked."
                  isActive={activeTab === "Locatie"}
                />
                <PropertyReview isActive={activeTab === "Review"} />
              </div>
            </div>
          </div>
          <PropertyOwners
            ownerId = {listing.ownerId}
            listingId={listing.id}
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;
