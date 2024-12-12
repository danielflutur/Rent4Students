import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import PricingCard from "../Cards/PricingCard";
import FaqSection from "../Faq/FaqSection";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import PageLayout from "../PageLayout/PageLayout";

function PricingUniversity() {
  return ( 
          <section className="pd-top-90 pd-btm-20">
            <div className="container-sm">
            <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
            Planuri de Abonament pentru Universități
                    <span>
                    Planul Anual, ideal pentru gestionarea studenților pe termen scurt, și Planul Pe 4 Ani, perfect pentru integrarea pe termen lung, cu beneficii financiare atractive.
                    </span>
                  </h3>
              <div className="row justify-content-md-center">
                    <PricingCard
                      title="Planul Anual"
                      price="49"
                      period="12 luni"
                      isActive={true}
                      features={[
                        { name: "Supor Tehnic", value: true },
                        { name: "Preț complet", value: true },
                        { name: "Reduceri", value: false },
                        { name: "Training gratuit", value: false },
                        { name: "Actualizari prioritare", value: false },
                      ]}
                    />{"  "}
                    <PricingCard
                      title="Planul pe 4 Ani"
                      price="99"
                      period="4 ani"
                      features={[
                        { name: "Supor Tehnic", value: true },
                        { name: "Discount semnificativ", value: true },
                        { name: "Reduceri", value: true },
                        { name: "Training gratuit", value: true },
                        { name: "Actualizari prioritare", value: true },
                      ]}
                    />
              </div>
            </div>
          </section>
    );
  }


export default PricingUniversity;
