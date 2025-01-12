import { useEffect, useState } from "react";
import WelcomeCardUniversity from "../Cards/WelcomeCardUniversity";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import WelcomeCardStudent from "../Cards/WelcomeCardStudent";

function WelcomeStudents() {
  const [input, setInput] = useState({
    universityName: "",
    email: "",
    validationCIF: "",
    validationCI: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Loading Handle
  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section
        className="ecom-wc ecom-wc__full ecom-bg-cover"
        // style={{ backgroundImage: "url('img/credential-bg.svg')" }}
      >
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                <h3 className="ecom-wc__form-title ecom-wc__form-title__one text-primary mb-4">
                  Bine ai venit în aplicația Rent4Student!
                </h3>
                <p className="ecom-wc__description text-muted mb-3">
                  <strong>Creează-ți profilul</strong> sau <strong>explorează pe cont propriu</strong> pentru a găsi locuința ideală sau colegul de apartament perfect.
                </p>
                <p className="ecom-wc__description text-dark">
                  Te invităm să completezi un scurt set de întrebări. Răspunsurile tale ne vor ajuta să-ți oferim recomandări personalizate, adaptate stilului tău de viață și preferințelor tale.
                </p>
                <div className="ecom-wc__instructions bg-light p-3 rounded">
                  <h5 className="text-secondary">Instrucțiuni suplimentare:</h5>
                  <ul className="list-style">
                    <li><i className="bi bi-check-circle text-success"></i> Procesul de completare durează doar câteva minute.</li>
                    <li><i className="bi bi-check-circle text-success"></i> Răspunde sincer pentru cele mai bune rezultate.</li>
                  </ul>
                </div>
                <br></br>
                  {/* Welcome  */}
                  <form className="ecom-wc__form-main p-0" action="index.html" method="post">
                  <div className="row">
                    {/* Card pentru butonul "Completează acum" */}
                    <div className="col-lg-6 mb-4">
                      <div className="ecom-wc__card">
                        <div className="ecom-wc__card-body text-center">
                          <div className="ecom-wc__button">
                            <a href="/page-1-personal-data" className="homec-btn complete-now">
                              <span>Completează acum</span>
                            </a>
                          </div>
                          <div className="ecom-wc__bottom">
                            <p className="ecom-wc__text">
                              Alege această opțiune pentru a beneficia de sugestii automatizate și de potriviri bazate pe nevoile tale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card pentru butonul "Caută pe cont propriu" */}
                    <div className="col-lg-6 mb-4">
                      <div className="ecom-wc__card">
                        <div className="ecom-wc__card-body text-center">
                          <div className="ecom-wc__button">
                            <a href="/home-university" className="homec-btn explore-yourself">
                              <span>Explorează singur</span>
                            </a>
                          </div>
                          <div className="ecom-wc__bottom">
                            <p className="ecom-wc__text">
                            Explorează fără a completa profilul, însă reține că recomandările nu vor fi personalizate pentru tine.       </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>


                  {/* End Sign in Form  */}
                </div>
              </div>
            </div>
            <WelcomeCardStudent
              image="img/welcome-students.png"
              brunches="120"
              builtHouse="150k"
            />
          </div>
        </div>
      </section>
    );
  }
  return component;
}

export default WelcomeStudents;
