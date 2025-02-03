import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import { useTranslation } from "react-i18next";
import WelcomeCardValidatePhoneNumberOwner from "../Cards/WelcomeCardValidatePhoneNumberOwner";

function ValidatePhoneNumberOwner() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    phoneNumber: "",
    validationCode: "",
  });

  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const confirmPhoneNumber = (e) => {
    e.preventDefault();
    setIsPhoneConfirmed(true);
  };

  const validateCode = (e) => {
    e.preventDefault();

    if (input.validationCode === "123456") {
      navigate("/home-owner");
    } else {
      alert(t("validate_phone_number.invalid_code")); // Display error
    }
  };

  const resendValidationCode = () => {
    console.log("Resend validation code for:", input.phoneNumber);
  };

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
                  {t("validate_phone_number.title")}
                </h3>
                <form
                  className="ecom-wc__form-main p-0"
                  onSubmit={
                    isPhoneConfirmed ? validateCode : confirmPhoneNumber
                  }
                >
                  {!isPhoneConfirmed ? (
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("validate_phone_number.phone_number")}
                        name="phoneNumber"
                        value={input.phoneNumber}
                        handleChange={handleChange}
                        placeholder="e.g., +40 123 456 789"
                        margin="-10px"
                      />
                      <div className="form-group form-mg-top-30">
                        <button
                          type="submit"
                          className="homec-btn homec-btn__second"
                        >
                          <span>
                            {t("validate_phone_number.confirm_button")}
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="row">
                        <PropertyTextInput
                          size="col-lg-6 col-md-6"
                          title={t("validate_phone_number.validation_code")}
                          name="validationCode"
                          value={input.validationCode}
                          handleChange={handleChange}
                          placeholder="000000"
                          margin="-10px"
                        />
                      </div>
                      <div className="form-group form-mg-top-30">
                        <button
                          type="submit"
                          className="homec-btn homec-btn__second"
                        >
                          <span>
                            {t("validate_phone_number.validate_button")}
                          </span>
                        </button>
                      </div>
                      <div className="form-group form-mg-top-10">
                        <button
                          type="button"
                          onClick={resendValidationCode}
                          className="homec-btn homec-btn__secondary"
                        >
                          <span>
                            {t("validate_phone_number.resend_code_button")}
                          </span>
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
          <WelcomeCardValidatePhoneNumberOwner
            image="img/validate_phone.png"
            brunches="120"
            builtHouse="150k"
          />
        </div>
      </div>
    </section>
  );
}

export default ValidatePhoneNumberOwner;
