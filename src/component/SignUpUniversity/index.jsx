import { useEffect, useState } from "react";
import WelcomeCardUniversity from "../Cards/WelcomeCardUniversity";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import { useTranslation } from "react-i18next";  // Importă hook-ul useTranslation

function SignUpUniversity() {
  const { t } = useTranslation();  // Folosește useTranslation pentru traduceri

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
      >
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    {t("create_account")}
                    <span>{t("fields_required")}</span>
                  </h3>
                  <form
                    className="ecom-wc__form-main p-0"
                    action="index.html"
                    method="post"
                  >
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-15 col-md-15"
                        title={t("university_name")}
                        name="universityName"
                        value={input.universityName}
                        handleChange={handleChange}
                        placeholder="Universitatea Ștefan cel Mare"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-15 col-md-15"
                        title={t("email")}
                        name="email"
                        value={input.email}
                        handleChange={handleChange}
                        placeholder="numeuniversitate@gmail.com"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("cif_validation")}
                        name="validationCIF"
                        value={input.validationCIF}
                        handleChange={handleChange}
                        placeholder="123456789"
                        margin="-10px"
                      />
                      
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("ci_validation")}
                        name="validationCI"
                        value={input.validationCI}
                        handleChange={handleChange}
                        placeholder="987654321"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("password")}
                        name="password"
                        value={input.password}
                        handleChange={handleChange}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        type="password"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("confirm_password")}
                        name="confirmPassword"
                        value={input.confirmPassword}
                        handleChange={handleChange}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        type="password"
                        margin="-10px"
                      />
                    </div>
                    <div className="form-group form-mg-top-30">
                      <div className="ecom-wc__button ecom-wc__button--bottom">
                        <a
                          href="/home-university"
                          className="homec-btn homec-btn__second"
                          type="submit"
                        >
                          <span>{t("signup")}</span>
                        </a>
                      </div>
                    </div>
                    <div className="form-group mg-top-20">
                      <div className="ecom-wc__bottom">
                        <p className="ecom-wc__text">
                          {t("already_have_account")} <a href="signup">{t("sign_in")}</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <WelcomeCardUniversity
              image="img/role_university.png"
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

export default SignUpUniversity;
