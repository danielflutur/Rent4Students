import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "../Loader";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { useNavigate, useLocation } from "react-router-dom";
import { attributes } from "../../data/attributes";
import { hobbies } from "../../data/hobbies";
import { allergies } from "../../data/allergies";
import StudentHobbiesInput from "../StudentHobbiesInput/StudentHobbiesInput";
import StudentAllergiesInput from "../StudentAllergiesInput/StudentAllergiesInput";
import ApiService from "../../services/ApiService";
import { useAuth } from "../../context/AuthProvider";

function Page3CompatibilityAndCommunication() {
  const { t } = useTranslation();
  const { state: inputData } = useLocation();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [data, setData] = useState(inputData || {});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
  }, []);

  const handleAttributeChange = (attributeId) => {
    setData((prevInput) => {
      const updatedAttributes = prevInput.attributesIds
        ? [...new Set([...prevInput.attributesIds, attributeId])]
        : [attributeId];

      return { ...prevInput, attributesIds: updatedAttributes };
    });
  };

  const [hobbiesState, setHobbiesState] = useState(
    hobbies.map((item) => ({
      id: item.id,
      value: item.value,
      checked: data.hobbiesIds.includes(item.id),
    }))
  );

  const handleHobbiesChange = (id) => {
    setData((prevInput) => {
      const updatedhobbies = prevInput.hobbiesIds.includes(id)
        ? prevInput.hobbiesIds.filter((hobbyId) => hobbyId !== id)
        : [...prevInput.hobbiesIds, id];

      setHobbiesState((prevState) =>
        prevState.map((hobby) =>
          hobby.id === id ? { ...hobby, checked: !hobby.checked } : hobby
        )
      );

      return { ...prevInput, hobbiesIds: updatedhobbies };
    });
  };

  const [allergiesState, setAllergiesState] = useState(
    allergies.map((item) => ({
      id: item.id,
      value: item.value,
      checked: data.allergiesIds.includes(item.id),
    }))
  );

  const handleAllergiesChange = (id) => {
    setData((prevInput) => {
      const updatedAllergies = prevInput.allergiesIds.includes(id)
        ? prevInput.allergiesIds.filter((allergyId) => allergyId !== id)
        : [...prevInput.allergiesIds, id];

      setAllergiesState((prevState) =>
        prevState.map((allergy) =>
          allergy.id === id
            ? { ...allergy, checked: !allergy.checked }
            : allergy
        )
      );

      return { ...prevInput, allergiesIds: updatedAllergies };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        hobbiesIds: data.hobbiesIds,
        allergiesIds: data.allergiesIds,
        attributesIds: data.attributesIds
      };

      const response = await ApiService.put(`Students/update-details/${data.id}`, formData);
      const authData = {
        id:response.data.id,
        role:"Student"
      };
      setAuth(authData);
      navigate("/home-student", { state: response.data });
    } catch (error) {
      console.error('Error updating student:', error.response?.data || error.message);
    }

  };

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section className="pd-top-80 pd-btm-80">
        {/* <div
          className="progress-bar-container"
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <div
            className="progress-bar"
            style={{
              height: "4px",
              backgroundColor: "#4caf50",
              width: `${progress}%`,
              transition: "width 0.5s ease",
            }}
          ></div>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="homec-submit-form">
                <h3 className="ecom-wc__form-title ecom-wc__form-title__one p-3 ">
                  {t("personal_data_form.compatibility_and_communication")}
                  <span>
                    {t("personal_data_form.personal_and_lifestyle_description")}
                  </span>
                </h3>

                {/* Formularele */}
                <form
                  className="homec-submit-form p-0"
                  onSubmit={handleSubmit}
                >
                  <div className="homec-submit-form__inner">
                    <div className="row">
                      <SelectDropDown
                        title={t("personal_data_form.studyEnvironment")}
                        size="col-lg-6 col-md-6"
                        name="studyEnvironment"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Mediu de Studiu"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.prefferedCommunication")}
                        size="col-lg-6 col-md-6"
                        name="prefferedCommunication"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) =>
                            attribute.name == "Mijloc de Comunicare Preferat"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.personalityType")}
                        size="col-lg-6 col-md-6"
                        name="personalityType"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) =>
                            attribute.name == "Tip de Personalitate"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.resolutionType")}
                        size="col-lg-6 col-md-6"
                        name="resolutionType"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) =>
                            attribute.name == "Stil de Rezolvare a Conflictelor"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />
                    </div>
                  <StudentHobbiesInput
                    hobbies={hobbiesState}
                    handleChange={handleHobbiesChange}
                    />

                  <StudentAllergiesInput
                    allergies={allergiesState}
                    handleChange={handleAllergiesChange}
                    />
                  <div className="form-group form-mg-top-30">
                    <div className="ecom-wc__button ecom-wc__button--bottom">
                      <button
                        onSubmit={handleSubmit}
                        className="homec-btn homec-btn__second"
                        >
                        <span>{t("personal_data_form.nextPage")}</span>
                      </button>
                    </div>
                  </div>
                        </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return component;
}

export default Page3CompatibilityAndCommunication;
