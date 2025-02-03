import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../PageLayout/PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import Layout from "./Layout";
import properties from "../../data/property";
import Pagination from "../Pagination";
import DashboardPropertyCardOwner from "../Cards/DashboardPropertyCardOwner";

function MyPropertiesOwner() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;

  // Funcția de paginare
  const handelPage = (page) => {
    if (page === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === "next" && currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(page);
    }
  };

  // Simulează încărcarea
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Renderizare componentă
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
        {properties?.map((property) => (
          <DashboardPropertyCardOwner
            key={property.id}
            status={property.status}
            image={property.img2}
            why={property.whatFor}
            title={property.name}
            location={property.address}
            rating={property.rating}
            totalRating={property.totalRating}
            // Pentru exemplu, să presupunem că proprietatea cu id-ul 1 are o cerere activă
            hasRequest={property.id === 1}
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
