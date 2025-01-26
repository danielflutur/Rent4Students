import Footer from "../Footer";
import Breadcrumbs from "../Breadcrumbs";
import { useEffect, useState } from "react";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import RoleCard from "../Cards/RoleCards";
import PageLayout from "../PageLayout/PageLayout";
import { useTranslation } from "react-i18next";  // Importă hook-ul useTranslation

function RoleSelection() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();  // Folosește useTranslation pentru traduceri

  useEffect(() => {
    setIsLoading(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <PageLayout>
        <Breadcrumbs title={t("continue_as")} titlePosition="bottom">
        </Breadcrumbs>

        <section className="homec-error pd-top-90 pd-btm-120">
          <div className="container">
            <div className="row">
              <RoleCard
                img="img/role_university.png"
                role={t('university')}
                info={t('university_info')}
                link="/signup-university"
              />
              <RoleCard
                img="img/role_student.png"
                role={t('student')}
                info={t('student_info')}
                link="/signup-student"
              />
              <RoleCard
                img="img/role_owner.png"
                role={t('owner')}
                info={t('owner_info')}
                link="/signup"
              />
              <RoleCard
                img="img/role_agency.png"
                role={t('agency')}
                info={t('agency_info')}
                link="/signup"
              />
            </div>
          </div>
        </section>
        <Footer />
        <GoTopBtn />
      </PageLayout>
    );
  }
  return component;
}

export default RoleSelection;
