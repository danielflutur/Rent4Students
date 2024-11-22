import Footer from "../Footer";
import Breadcrumbs from "../Breadcrumbs";
import { useEffect, useState } from "react";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import RoleCard from "../Cards/RoleCards";
import PageLayout from "../PageLayout/PageLayout";

function RoleSelection() {
  const [isLoading, setisLoadingg] = useState(true);

  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <PageLayout>
        <Breadcrumbs title="Continue as" titlePosition="bottom">
        </Breadcrumbs>

        <section className="homec-error pd-top-90 pd-btm-120">
          <div className="container">
            <div className="row">
              <RoleCard
                img="img/role_university.png"
                role="University"
                info="Administrați studenții și facilitați validarea rapidă a statutului lor academic."
                link="/signup-university" //aici o sa fie un signup diferit pentru fiecare tip de rol
              />
              <RoleCard
                img="img/role_student.png"
                role="Student"
                info="Găsiți locuința perfectă, sigură și aproape de facultatea dumneavoastră."
                link="/signup" //aici o sa fie un signup diferit pentru fiecare tip de rol
               // btn="second"
              />
              <RoleCard
                img="img/role_owner.png"
                role="Owner"
                info="Listați proprietăți și conectați-vă cu studenți validați de universitate."
                link="/signup" //aici o sa fie un signup diferit pentru fiecare tip de rol
               // btn="second"
              />
              <RoleCard
                img="img/role_agency.png"
                role="Real Estate Agency"
                info="Gestionează oferte imobiliare și ajută studenții să găsească un cămin."
                link="/signup" //aici o sa fie un signup diferit pentru fiecare tip de rol
               // btn="second"
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
