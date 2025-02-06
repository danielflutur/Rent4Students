import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../PageLayout/PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import properties from "../../data/property";
import Pagination from "../Pagination";
import DashboardPropertyCardOwner from "../Cards/DashboardPropertyCardOwner";
import ApiService from "../../services/ApiService";
import { useAuth } from "../../context/AuthProvider";

function MyPropertiesOwner() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;
  const {auth} = useAuth();
  const [listings, setListings] = useState([]);

  const handelPage = (page) => {
    if (page === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === "next" && currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (auth) {
      ApiService.get(`Listings/ownedBy/${auth.id}`)
        .then((response) => {
          setListings(response.data);
          setIsLoading(false);
          console.log(response.data);
        })
        .catch((error) =>
          console.error("Error fetching listing details:", error)
        );
    }
  }, []);

  const component = isLoading ? (
    <Preloader />
  ) : (
    <PageLayout>
      <Breadcrumbs
        title={t("my_properties_title")}
        titlePosition="bottom"
        background="url(img/bread-overlay.jpg)"
      />

      <div className="page-form-container">
        {listings?.map((property) => (
          <DashboardPropertyCardOwner
            key={property.id}
            status={property.isRented ? "Rented" : "Active"}
            image={property.photo}
            why={"Rent"}
            title={property.title}
            location={`${property.address.addressDetails}, ${property.address.city}, ${property.address.county}`}
            rating={5}
            totalRating={10}
            hasRequest={property.rentRequestDetails.rentStatusId === 3}
            requestDetails = {property.rentRequestDetails}
          />
        ))}
      </div>
      <Pagination totalPage={totalPage} currentPage={currentPage} handlePage={handelPage} />
      <GoTopBtn />
    </PageLayout>
  );

  return component;
}

export default MyPropertiesOwner;
