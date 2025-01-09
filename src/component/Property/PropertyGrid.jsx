import { useEffect, useState } from "react";
import PropertyBar from "./PropertyBar";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import Pagination from "../Pagination";
import ApiService from "../../services/ApiService";
import ListingFilters from "../ListingFilters/ListingFilters";
import { useData } from "../../context/ListingFeaturesProvider";

function PropertyGrid() {
  // Handle grid style
  const [gridStyle, setGridStyle] = useState("grid");
  const handleGridStyle = (style) => setGridStyle(style);

  // Handle pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;

  // Data for listings
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  // Selected filters
  const [activeFilters, setActiveFilters] = useState([]);

  const { features } = useData(); // Access listing features

  useEffect(() => {
    // Fetch all listings
    ApiService.get("Listings")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Update filtered data when activeFilters change
  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((listing) =>
          activeFilters.every((filterId) => listing.amenitiesIds.includes(filterId))
        )
      );
    }
  }, [activeFilters, data]);

  const handelPage = (page) => {
    if (page === "prev") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else if (page === "next") {
      if (currentPage < totalPage) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <section className="homec-propertys pd-top-80 pd-btm-80">
      <div className="container">
        <PropertyBar gridStyle={gridStyle} handleGridStyle={handleGridStyle} />
        <div className="row">
          {/* Pass filter state and handler to ListingFilters */}
          <ListingFilters activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
          <div className="col-lg-8 col-12">
            <div className="tab-content" id="nav-tabContent">
              {/* Grid Tab */}
              <div
                className="tab-pane fade show active"
                id="homec-grid"
                role="tabpanel"
              >
                <div className="row">
                  {filteredData?.map((property) => (
                    <LatestPropertyCard
                      key={property.id}
                      id={property.id}
                      title={property.title}
                      rentPrice={property.rentPrice}
                      surface={property.surface}
                      address={property.address}
                      photos={property.photos}
                      classes={`${
                        gridStyle === "grid"
                          ? "col-md-6 col-12 mg-top-30"
                          : "col-12 mg-top-30"
                      } `}
                      view={gridStyle}
                    />
                  ))}
                </div>
                <Pagination
                  totalPage={totalPage}
                  handlePage={handelPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyGrid;
