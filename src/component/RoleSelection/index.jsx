import Header from "../Header";
import Footer from "../Footer";
import DownloadApp from "../DownloadApp";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import PropertyAddCard from "../Cards/PropertyAddCard";
import { useEffect, useState } from "react";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import RoleCard from "../Cards/RoleCards";

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
      <>
        <Header />
        <Breadcrumbs title="Continure as" titlePosition="bottom">
        </Breadcrumbs>

        <section className="homec-error pd-top-90 pd-btm-120">
          <div className="container">
            <div className="row">
              <RoleCard
                img="img/property-rent.png"
                role="University"
                link="/signup" //aici o sa fie un signup diferit pentru fiecare tip de rol
              />
              <RoleCard
                img="img/property-sale.png"
                role="Student"
                link="/signup"
                btn="second"
              />
              <RoleCard
                img="img/property-sale.png"
                role="Owner"
                link="/signup"
                btn="second"
              />
              <RoleCard
                img="img/property-sale.png"
                role="Real Estate Agency"
                link="/signup"
                btn="second"
              />
            </div>
          </div>
        </section>

        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default RoleSelection;
