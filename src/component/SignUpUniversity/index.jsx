import { useEffect, useState } from "react";
import WelcomeCardUniversity from "../Cards/WelcomeCardUniversity";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import { useTranslation } from "react-i18next"; // Importă hook-ul useTranslation
import { useAuth } from "../../context/AuthProvider";
import ApiService from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

function SignUpUniversity() {
  const { t } = useTranslation(); // Folosește useTranslation pentru traduceri
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [input, setInput] = useState({
    name: "",
    email: "",
    validationCIF: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
      data.append("Name", input.name);
      data.append("Email", input.email);
      data.append("EncryptedPassword", input.password);
      data.append("Phone", "075556544");
      data.append("CIF", input.validationCIF);
      data.append("Address.AddressDetails", "Address");
      data.append("Address.City", "City");
      data.append("Address.County", "county");

    const response = await ApiService.post("Universities", data);
    const authData = {
      id: response.data.id,
      role: "University",
    };
    setAuth(authData);
    navigate("/home-university", { state: input });
  };

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section className="ecom-wc ecom-wc__full ecom-bg-cover">
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
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-15 col-md-15"
                        title={t("university_name")}
                        name="name"
                        value={input.name}
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
                        <button
                          className="homec-btn homec-btn__second"
                          type="submit"
                        >
                          <span>{t("signup")}</span>
                        </button>
                      </div>
                    </div>
                    <div className="form-group mg-top-20">
                      <div className="ecom-wc__bottom">
                        <p className="ecom-wc__text">
                          {t("already_have_account")}{" "}
                          <a href="signup">{t("sign_in")}</a>
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
