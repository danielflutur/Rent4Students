import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "../Loader";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { useNavigate, useLocation } from "react-router-dom";
import { attributes } from "../../data/attributes";

function Page2LivingAndSocialPreferences() {
  const { t } = useTranslation();
  const { state: inputData } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState(inputData || {});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
  }, []);

  useEffect(() => {
    console.log("Updated attributesIds:", data.attributesIds);
  }, [data.attributesIds]);

  const handleAttributeChange = (attributeId) => {
    setData((prevInput) => {
      const updatedAttributes = prevInput.attributesIds
        ? [...new Set([...prevInput.attributesIds, attributeId])]
        : [attributeId];
  
      return { ...prevInput, attributesIds: updatedAttributes };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/page-3-compatibility-communication", { state: data });
  };

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section className="ecom-wc ecom-wc__full ecom-bg-cover">
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

        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    {t("personal_data_form.living_and_social")}
                    <span>{t("personal_data_form.personal_and_lifestyle_description")}</span>
                  </h3>

                  {/* Formularele */}
                  <form className="ecom-wc__form-main p-0"
                  onSubmit={handleSubmit}>
                    <div className="row">
                      <SelectDropDown
                        title={t("personal_data_form.noiseTolerance")}
                        size="col-lg-6 col-md-6"
                        name="noiseTolerance"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Toleranță la Zgomot"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.cleanlinessLevel")}
                        size="col-lg-6 col-md-6"
                        name="cleanlinessLevel"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Nivel de Curățenie"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.cookingHabbits")}
                        size="col-lg-6 col-md-6"
                        name="cookingHabbits"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) =>
                            attribute.name == "Obiceiuri de Gătit"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.prefferedLiving")}
                        size="col-lg-6 col-md-6"
                        name="prefferedLiving"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Aranjament de Locuit Preferat"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.exerciseRoutine")}
                        size="col-lg-6 col-md-6"
                        name="exerciseRoutine"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Rutine de Exerciții"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.socialHabbits")}
                        size="col-lg-6 col-md-6"
                        name="socialHabbits"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Obiceiuri Sociale"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.prefferedRoommate")}
                        size="col-lg-6 col-md-6"
                        name="prefferedRoommate"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Genul Preferat al Colegului de Cameră"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.guestTolerance")}
                        size="col-lg-6 col-md-6"
                        name="guestTolerance"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) =>
                            attribute.name == "Toleranță la Oaspeți"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />
                    </div>

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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return component;
}

export default Page2LivingAndSocialPreferences;
