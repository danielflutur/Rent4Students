import { useState } from "react";
import According from "./According";

function FaqSection() {
  const [collapse, setCollapse] = useState(1);
  const handleCollapse = (id) => {
    setCollapse(id === collapse ? false : id);
  };
  return (
    <section
      className="homec-bg-cover pd-top-90 pd-btm-120"
      style={{
        backgroundImage: "url('img/bg-shape-five.svg')",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="container homec-container-medium">
        <div className="row homec-container-medium__row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-12 mg-top-30"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="homec-section__head">
              <div className="homec-section__shape">
                <span
                  className="homec-section__badge homec-section__badge--shape homec-section__badge--shape--v2"
                  style={{ backgroundImage: "url('img/shape-3.svg')" }}
                >
                  FAQ
                </span>
              </div>
              <h2 className="homec-section__title">
              Dacă doriți să aflați
              <br></br> 
              Întrebări frecvente
              </h2>
            </div>
            <div
              className="homec-accordion accordion accordion-flush"
              id="homec-accordion"
            >
              <According
                heading="Cum poate o universitate să adauge și să gestioneze facultățile în platformă?"
                desc=" Universitățile pot utiliza un formular dedicat pentru a adăuga
                    facultăți, alături de adresele de e-mail ale secretarilor care vor
                    gestiona cererile studenților."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={1}
              />
              <According
                heading="Ce avantaje aduce platforma Rent4Students universităților?"
                desc=" Platforma digitalizează gestionarea cererilor de subvenții
                    pentru chirie, economisind timp și resurse administrative, și
                    oferă un mediu centralizat și ușor de utilizat."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={2}
              />

              <According
                heading="Ce tipuri de abonamente sunt disponibile pentru universități?"
                desc=" Rent4Students oferă două opțiuni: un plan anual pentru acces
                    complet timp de un an și un plan pe patru ani, ideal pentru
                    gestionarea unei generații universitare complete."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={3}
              />
              <According
                serial={4}
                heading="Cum sunt gestionate cererile și documentele studenților?"
                desc="Fiecare facultate își gestionează propriii studenți printr-un
                    sistem centralizat, asigurând transparență și eficiență în
                    procesarea cererilor pentru ajutorul de chirie."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={4}
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-12 mg-top-30"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* Support Img   */}
            <div className="homec-support-img">
              <img src="img/image-university-3.png" alt="#" />
              <div className="homec-support-img__content">
                <img src="img/support-icon-white.svg" alt="#" />
                <h4 className="homec-support-img__title">
                  24/7 Suport <span>Dacă ai întrebări contactează-ne?</span>
                </h4>
              </div>
            </div>
            {/* End Support Img  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
