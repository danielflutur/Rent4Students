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

function AddFaculty() {
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
          <Breadcrumbs
            title="Adaugă Facultate"
            titlePosition="bottom"
            background="url(img/bread-overlay.jpg)"
          >
          </Breadcrumbs>
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
