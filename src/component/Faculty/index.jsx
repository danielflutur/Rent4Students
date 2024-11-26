import { useEffect, useState } from "react";
import Preloader from "../Loader";
import Breadcrumbs from "../Breadcrumbs";
import GoTopBtn from "../Button/GoTopBtn";
import Footer from "../Footer";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import FacultyGrid from "./FacultyGrid";
import PageLayout from "../PageLayout/PageLayout";

function Faculty() {
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
          <Breadcrumbs title="Gestionare Facultăți">
          </Breadcrumbs>
          <FacultyGrid />
          <GoTopBtn />
        </PageLayout>
      </>
    );
  }

  return component;
}

export default Faculty;
