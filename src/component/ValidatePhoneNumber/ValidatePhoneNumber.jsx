import { useEffect, useState } from "react";
import WelcomeCard from "../Cards/WelcomeCard";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import WelcomeCardValidatePhoneNumber from "../Cards/WelcomeCardValidatePhoneNumber";
import { useTranslation } from "react-i18next"; // Importați useTranslation

function ValidatePhoneNumber() {
  const [input, setInput] = useState({
    validationCode: "",
  });
  
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Loading Handle
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const { t } = useTranslation(); // Folosim useTranslation pentru a obține funcția de traducere

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
                    {t('validate_phone_number.title')} {/* Traducere */}
                  </h3>
                  <form
                    className="ecom-wc__form-main p-0"
                    action="index.html"
                    method="post"
                  >
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t('validate_phone_number.validation_code')} 
                        name="validationCode"
                        value={input.validationCode}
                        handleChange={handleChange}
                        placeholder="000000"
                        margin="-10px"
                      />
                    </div>
                    <div className="form-group form-mg-top-30">
                      <div className="ecom-wc__button ecom-wc__button--bottom">
                        <a href="/welcome-students" className="homec-btn homec-btn__second" type="submit">
                          <span>{t('validate_phone_number.validate_button')}</span> {/* Traducere */}
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <WelcomeCardValidatePhoneNumber
              image="img/validate_phone.png"
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

export default ValidatePhoneNumber;
