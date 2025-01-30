import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Preloader from "../Loader";
import WelcomeCardStudent from "../Cards/WelcomeCardStudent";
import { useTranslation } from "react-i18next";

function WelcomeStudents() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/page-1-personal-data", { state: data });
  };

  useEffect(() => {
    setIsLoading(false);
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
                    {t("welcome_students.welcome_title")}
                  </h3>
                  <p className="ecom-wc__description text-muted mb-3">
                    <strong>{t("welcome_students.create_profile")}</strong>{" "}
                    {t("welcome_students.or_explore")}
                  </p>
                  <p className="ecom-wc__description text-dark">
                    {t("welcome_students.invite_text")}
                  </p>
                  <div className="ecom-wc__instructions bg-light p-3 rounded">
                    <h5 className="text-secondary">
                      {t("welcome_students.additional_instructions")}
                    </h5>
                    <ul className="list-style">
                      <li>
                        <i className="bi bi-check-circle text-success"></i>{" "}
                        {t("welcome_students.instruction_one")}
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>{" "}
                        {t("welcome_students.instruction_two")}
                      </li>
                    </ul>
                  </div>
                  <br />
                  {/* Welcome  */}
                  <form
                    className="ecom-wc__form-main p-0"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      {/* Card pentru butonul "Completează acum" */}
                      <div className="col-lg-6 mb-4">
                        <div className="ecom-wc__card">
                          <div className="ecom-wc__card-body text-center">
                            <div className="ecom-wc__button">
                              <button
                                onSubmit={handleSubmit}
                                className="homec-btn complete-now"
                              >
                                <span>
                                  {t("welcome_students.complete_now")}
                                </span>
                              </button>
                            </div>
                            <div className="ecom-wc__bottom">
                              <p className="ecom-wc__text">
                                {t("welcome_students.complete_description")}
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
                              <a
                                href="/home-university"
                                className="homec-btn explore-yourself"
                              >
                                <span>
                                  {t("welcome_students.explore_yourself")}
                                </span>
                              </a>
                            </div>
                            <div className="ecom-wc__bottom">
                              <p className="ecom-wc__text">
                                {t("welcome_students.explore_description")}
                              </p>
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
