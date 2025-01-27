import { useEffect, useState } from "react";
import WelcomeCardStudent from "../Cards/WelcomeCardStudent";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import { useTranslation } from "react-i18next";  // Importing translation hook

function SignUpStudent() {
  const { t } = useTranslation();  // Use translation hook to get text in different languages

  const [input, setInput] = useState({
    studentFirstName: "",
    studentSecondName: "",
    email: "",
    universityName: "",
    namefaculty: "",
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
                    {t("student_create_account")}
                    <span>{t("student_fields_required")}</span>
                  </h3>
                  {/* Sign Up Form */}
                  <form className="ecom-wc__form-main p-0" action="index.html" method="post">
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("first_name")}
                        name="studentFirstName"
                        value={input.studentFirstName}
                        handleChange={handleChange}
                        placeholder="Popescu"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("last_name")}
                        name="studentSecondName"
                        value={input.studentSecondName}
                        handleChange={handleChange}
                        placeholder="Ion"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-15 col-md-15"
                        title={t("student_email")}
                        name="email"
                        value={input.email}
                        handleChange={handleChange}
                        placeholder="popescuion@gmail.com"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("student_university_name")}
                        name="universityName"
                        value={input.universityName}
                        handleChange={handleChange}
                        placeholder="Universitatea Ștefan cel Mare"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("faculty_name")}
                        name="namefaculty"
                        value={input.namefaculty}
                        handleChange={handleChange}
                        placeholder="Inginerie Electrică"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("student_password")}
                        name="password"
                        value={input.password}
                        handleChange={handleChange}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        type="password"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("student_confirm_password")}
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
                        <a href="/validate-phone" className="homec-btn homec-btn__second" type="submit">
                          <span>{t("student_signup")}</span>
                        </a>
                      </div>
                    </div>
                    <div className="form-group mg-top-20">
                      <div className="ecom-wc__bottom">
                        <p className="ecom-wc__text">
                          {t("already_have_account_student")} <a href="signup">{t("sign_in")}</a>
                        </p>
                      </div>
                    </div>
                  </form>
                  {/* End of Sign Up Form */}
                </div>
              </div>
            </div>
            <WelcomeCardStudent
              image="img/role_student.png"
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

export default SignUpStudent;
