import { useEffect, useState } from "react";
import WelcomeCardUniversity from "../Cards/WelcomeCardUniversity";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import WelcomeCardStudent from "../Cards/WelcomeCardStudent";

function SignUpStudent() {
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
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    Creazăți cont ca Student
                    <span>
                    Câmpurile obligatorii sunt marcate cu *
                    </span>
                  </h3>
                  {/* Sign in Form  */}
                  <form
                    className="ecom-wc__form-main p-0  "
                    action="index.html"
                    method="post"
                  >
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Nume Student*"
                        name="studentFirstName"
                        value={input.studentFirstName}
                        handleChange={handleChange}
                        placeholder="Popescu"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Prenume Student*"
                        name="studentSecondName"
                        value={input.studentSecondName}
                        handleChange={handleChange}
                        placeholder="Ion"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-15 col-md-15"
                        title="Email*"
                        name="email"
                        value={input.email}
                        handleChange={handleChange}
                        placeholder="popescuion@gmail.com"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Nume Universitate*"
                        name="universityName"
                        value={input.universityName}
                        handleChange={handleChange}
                        placeholder="Universitatea Ștefan cel Mare"
                        margin="-10px"
                      />
                      
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Nume Facultate*"
                        name="namefaculty"
                        value={input.namefaculty}
                        handleChange={handleChange}
                        placeholder="Inginerie Electrică"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Parola*"
                        name="password"
                        value={input.password}
                        handleChange={handleChange}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        type="password"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Confirmare Parola*"
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
                          href="/welcome-students"
                          className="homec-btn homec-btn__second"
                          type="submit"
                        >
                          <span>Înregistrează-te</span>
                        </a>
                      </div>
                    </div>
                    {/* Form Group  */}
                    <div className="form-group mg-top-20">
                      <div className="ecom-wc__bottom">
                        <p className="ecom-wc__text">
                          Ai deja un cont? <a href="signup">Autentifică-te</a>
                        </p>
                      </div>
                    </div>
                  </form>
                  {/* End Sign in Form  */}
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
