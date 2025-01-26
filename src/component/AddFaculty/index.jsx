import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import PropertyFrom from "../Form/PropertyFrom";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import GoTopBtn from "../Button/GoTopBtn";
import PageLayout from "../PageLayout/PageLayout";
import FacultyFrom from "../Form/FacultyFrom";
import { useTranslation } from "react-i18next";

function AddFaculty() {
  const { t } = useTranslation(); // Hook pentru traduceri
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  let component = undefined;

  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <PageLayout>
          <Breadcrumbs
            title={t("add_faculty_breadcrumb_title")}
            titlePosition="bottom"
            background="url(img/bread-overlay.jpg)"
          ></Breadcrumbs>
          <FacultyFrom />
          <Footer />
          <GoTopBtn />
        </PageLayout>
      </>
    );
  }
  return component;
}

export default AddFaculty;
