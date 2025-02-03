import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../PageLayout/PageLayout";
import DashboardCard from "../Cards/DashboardCard";
import Breadcrumbs from "../Breadcrumbs";
import Preloader from "../Loader";
import Layout from "./Layout";


function DashboardCompOwner() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;

  // Paginare
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

  // Componentele ce se vor afișa
  const component = isLoading ? (
    <Preloader />
  ) : (
    <PageLayout>
      <Breadcrumbs
        title={t("my_properties_title")}
        titlePosition="bottom"
        background="url(img/bread-overlay.jpg)"
      />
<div className="page-form-container-owner-dashboard">
      <Layout title="Facturile apartamentului">
      <DashboardCard
        image="img/building-user.svg"
        text="Asociație"
        to="/owner-property-association"
      />
      <DashboardCard
        image="img/zap.svg"
        text="Electricitate"
      />
      <DashboardCard
        image="img/fire.svg"
        text="Gaz"
      />
      <DashboardCard
        image="img/wifi.svg"
        text="Internet"
      />
      <DashboardCard
        image="img/tv.svg"
        text="Televiziune"
      />
      <DashboardCard
        image="img/trash.svg"
        text="Salubrizare"
      />

      </Layout>
      </div>
      </PageLayout>
  );

  return component;
}

export default DashboardCompOwner;
