import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import WelcomeCardOwner from "../Cards/WelcomeCardOwner";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";

function SignUpOwner() {
  const { t } = useTranslation();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <section className="ecom-wc ecom-wc__full ecom-bg-cover">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6 col-12">
            <div className="ecom-wc__form">
              <div className="ecom-wc__form-inner">
                <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                  {t("createAccount")}
                  <span>{t("emailPrivacyNote")}</span>
                </h3>
                <form className="ecom-wc__form-main p-0" action="#" method="post">
                  <div className="row">
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title={t("firstName")}
                      name="firstName"
                      value={input.firstName}
                      handleChange={handleChange}
                      placeholder="John"
                      margin="-10px"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title={t("lastName")}
                      name="lastName"
                      value={input.lastName}
                      handleChange={handleChange}
                      placeholder="Doe"
                      margin="-10px"
                    />
                    <PropertyTextInput
                      size="col-lg-12 col-md-6"
                      title={t("emailAddress")}
                      name="email"
                      value={input.email}
                      handleChange={handleChange}
                      placeholder="example@mail.com"
                      margin="-10px"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title={t("password")}
                      name="password"
                      value={input.password}
                      handleChange={handleChange}
                      placeholder="********"
                      type="password"
                      margin="-10px"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title={t("confirmPassword")}
                      name="confirmPassword"
                      value={input.confirmPassword}
                      handleChange={handleChange}
                      placeholder="********"
                      type="password"
                      margin="-10px"
                    />
                  </div>
                  <div className="form-group form-mg-top-30">
                    <div className="ecom-wc__button ecom-wc__button--bottom">
                        <a
                          href="/validate-phone-owner"
                          className="homec-btn homec-btn__second"
                          type="submit"
                        > 
                        <span>{t("signUp")}</span>
                      </a>
                      <button className="homec-btn homec-btn__second homec-btn__social" type="submit">
                        <span className="ntfmax-wc__btn-icon">
                          <img src="img/google.svg" alt="Google" />
                        </span>
                        <span>{t("signUpWithGoogle")}</span>
                      </button>
                    </div>
                  </div>
                  <div className="form-group mg-top-20">
                    <div className="ecom-wc__bottom">
                      <p className="ecom-wc__text">
                        {t("alreadyHaveAccount")} <a href="login">{t("logIn")}</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <WelcomeCardOwner image="img/role-owner.png" brunches="120" builtHouse="150k" />
        </div>
      </div>
    </section>
  );
}

export default SignUpOwner;
