import { useEffect, useState } from "react";
import WelcomeCardLogin from "../Cards/WelcomeCardLogin";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import ApiService from "../../services/ApiService";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AppLogin() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.get(`Auth?email=${input.email}`);
      setAuth(response.data);
      console.log(response.data);
      handleRoleNavigation(response.data.role);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

const handleRoleNavigation = (role) =>{
  if (role === "Student") {
    navigate("/home-student");
  }
  else if (role === "University") {
    navigate("/home-university");
  }
  else if (role === "PropertyOwner") {
    navigate("/home-owner");
  }
  else {
    navigate("/");
  }
};

  // loading handler
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  let component;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section className="ecom-wc ecom-wc__full ecom-bg-cover">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    {t("login.title")}
                    <span>{t("login.subtitle")}</span>
                  </h3>
                  {/* Sign in Form  */}
                  <form
                    className="ecom-wc__form-main p-0"
                    onSubmit={handleSubmit}
                  >
                    <PropertyTextInput
                      title={t("login.emailLabel")}
                      name="email"
                      value={input.email}
                      handleChange={handleChange}
                      placeholder={t("login.emailPlaceholder")}
                    />
                    <PropertyTextInput
                      title={t("login.passwordLabel")}
                      name="password"
                      value={input.password}
                      handleChange={handleChange}
                      placeholder={t("login.passwordPlaceholder")}
                      type="password"
                    />
                    <div className="form-group form-mg-top-30">
                      <div className="ecom-wc__button ecom-wc__button--bottom">
                        <button
                          className="homec-btn homec-btn__second"
                          type="submit"
                        >
                          <span>{t("login.loginButton")}</span>
                        </button>
                      </div>
                    </div>
                    {/* Form Group  */}
                    <div className="form-group mg-top-20">
                      <div className="ecom-wc__bottom">
                        <p className="ecom-wc__text">
                          {t("login.noAccount")}{" "}
                          <a href="signup">{t("login.createAccount")}</a>
                        </p>
                      </div>
                    </div>
                  </form>
                  {/* End Sign in Form  */}
                </div>
              </div>
            </div>
            <WelcomeCardLogin image="img/role_login.png" />
          </div>
        </div>
      </section>
    );
  }
  return component;
}

export default AppLogin;
