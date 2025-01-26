import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import { useTranslation } from "react-i18next";

function FacultyFrom() {
  const { t } = useTranslation(); // Hook pentru traduceri
  const [input, setInput] = useState({
    title: "",
    name_secretary: "",
    email: "",
  });

  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <section className="pd-top-80 pd-btm-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <div className="homec-submit-form">
                <h4 className="homec-submit-form__title">
                  {t("faculty_information")}
                </h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                    <PropertyTextInput
                      title={t("faculty_name_label")}
                      name="title"
                      value={input.title}
                      handleChange={handleTextChange}
                      placeholder={t("faculty_name_placeholder")}
                    />
                    <PropertyTextInput
                      title={t("secretary_name_label")}
                      name="name_secretary"
                      value={input.name_secretary}
                      handleChange={handleTextChange}
                      placeholder={t("secretary_name_placeholder")}
                    />
                    <PropertyTextInput
                      title={t("email_label")}
                      name="email"
                      value={input.email}
                      handleChange={handleTextChange}
                      placeholder={t("email_placeholder")}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span>{t("add_faculty_button")}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacultyFrom;