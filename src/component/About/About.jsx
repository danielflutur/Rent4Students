import AboutCard from "../Cards/AboutCard";
import AboutShapeImg from "./AboutShapeImg";

function About() {
  return (
    <section className="homec-about homec-bg-third-color pd-top-90 pd-btm-120">
      <div className="homec-shape">
        <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
        <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
        <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
        <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
        <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
        <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-12 mg-top-30"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {/* Homec Image Group */}
            <div className="homec-image-group homec-image-group--v2">
              <div className="homec-image-group__main">
                <img src="img/image-university-1.png" alt="#" />
              </div>
              <div className="homec-ceo-quote">
                <div className="homec-ceo-quote__img">
                  <div className="homec-overlay"></div>
                  <img src="img/image-university-2.png" alt="#" />
                </div>
                <h4 className="homec-ceo-quote__title">
                  Beneficii pentru Studenți
                </h4>
              </div>
            </div>
            {/* End Homec Image Group */}
          </div>
          <div className="col-lg-6 col-12 mg-top-30">
            <div className="homec-about-content homec-about-content--v2">
              {/* Section Title */}
              <div className="homec-section__head">
                <div className="homec-section__shape">
                  <span
                    className="homec-section__badge homec-section__badge--shape"
                    style={{ backgroundImage: "url('img/section-shape.svg')" }}
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    Rent4Students
                  </span>
                </div>
                <h2
                  className="homec-section__title"
                  data-aos="fade-in"
                  data-aos-delay="400"
                >
                  Cum influențează aplicația viața studenților și nu numai?
                </h2>
              </div>
              <div
                className="homec-about-content__inner mg-top-20"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <p className="homec-about-content__text">
                  Rent4Students este o platformă digitală care simplifică procesul de gestionare
                  a cererilor pentru subvenții de chirie dedicate studenților. Universitățile beneficiază
                  de un sistem centralizat pentru administrarea cererilor și a documentelor,
                  reducând birocrația și optimizând timpul secretarilor.
                </p>
                <div className="homec-focus-content homec-focus-content--v2 homec-border mg-top-20">
                  <p>
                  Platforma promovează transparența și eficiența în relațiile dintre studenți,
                  universități și proprietari, contribuind la un mediu de gestionare modern și digitalizat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
