import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeCardStudent from "../Cards/WelcomeCardStudent";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import { useTranslation } from "react-i18next";
import ApiService from "../../services/ApiService";
import SelectDropDown from "../SelectDropDown/SelectDropDown";

function SignUpStudent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [faculties, setFaculties] = useState([]);
  const [selectedUniversityId, setSelectedUniversityId] = useState("");

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    encryptedPassword: "",
    phone: "",
    studentIdNumber: "",
    age: "",
    yearOfStudy: "",
    genderId: "",
    nationalityId: "",
    facultyId: "",
    address: {
      addressDetails: "",
      city: "",
      county: "",
    },
    hobbiesIds: [],
    allergiesIds: [],
    attributesIds: [],
    livingPreferencesIds: [],
    universityId: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleDropdownChange = (selectedId) => {
    setInput((prevInput) => ({
      ...prevInput,
      universityId: selectedId,
    }));
    setSelectedUniversityId(selectedId);
  };

  const handleFacultyDropdownChange = (selectedId) => {
    setInput((prevInput) => ({
      ...prevInput,
      facultyId: selectedId,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page reload
    navigate("/validate-phone", { state: input });
  };
  
  useEffect(() => {
    ApiService.get("Universities")
      .then((response) => {
        setUniversities(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (selectedUniversityId) {
      ApiService.get(`Faculties/allByUniversity/${selectedUniversityId}`)
        .then((response) => {
          setFaculties(response.data);
          setIsLoading(false);
        })
        .catch((error) => console.error("Error fetching faculties:", error));
    } else {
      setFaculties([]);
    }
  }, [selectedUniversityId]);

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
                  <form
                    className="ecom-wc__form-main p-0"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("first_name")}
                        name="firstName"
                        value={input.firstName}
                        handleChange={handleChange}
                        placeholder="Ion"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("last_name")}
                        name="lastName"
                        value={input.lastName}
                        handleChange={handleChange}
                        placeholder="Popescu"
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

                      <SelectDropDown
                        size="col-lg-6 col-md-6"
                        title={t("student_university_name")}
                        name="universityId"
                        value={input.universityId}
                        data={universities.map((university) => ({
                          value: university.name,
                          id: university.id,
                        }))}
                        handleChange={(e) =>
                          handleDropdownChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        size="col-lg-6 col-md-6"
                        title={t("faculty_name")}
                        name="facultyId"
                        value={input.facultyId}
                        data={faculties.map((faculty) => ({
                          value: faculty.name,
                          id: faculty.id,
                        }))}
                        handleChange={(e) =>
                          handleFacultyDropdownChange(e.target.value)
                        }
                      />

                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t("student_password")}
                        name="encryptedPassword"
                        value={input.encryptedPassword}
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
                      <button
                        className="homec-btn homec-btn__second"
                        type="submit"
                      >
                        {t("student_signup")}
                        </button>
                      </div>
                    </div>
                    <div className="form-group mg-top-20">
                      <div className="ecom-wc__bottom">
                        <p className="ecom-wc__text">
                          {t("already_have_account_student")}{" "}
                          <a href="signup">{t("sign_in")}</a>
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
