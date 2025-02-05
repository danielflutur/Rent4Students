import { useEffect, useState } from "react";
import Preloader from "../Loader";
import Breadcrumbs from "../Breadcrumbs";
import GoTopBtn from "../Button/GoTopBtn";
import PageLayout from "../PageLayout/PageLayout";
import { useTranslation } from "react-i18next";
import ManageStudentsGrid from "./ManageStudentsGrid";

function ManageStudents() {
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
          <Breadcrumbs title={t("manage_students")} />
            <ManageStudentsGrid />
          <GoTopBtn />
        </PageLayout>
      </>
    );
  }

  return component;
}

export default ManageStudents;
