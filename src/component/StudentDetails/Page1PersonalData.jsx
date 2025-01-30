import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "../Loader";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { useNavigate, useLocation } from "react-router-dom";
import { attributes } from "../../data/attributes";

function Page1PersonalData() {
  const { t } = useTranslation();
  const { state: inputData } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState(inputData || {});

  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const totalFields = 8;
    let filledFields = 0;

    for (let key in input) {
      if (input[key] !== "") {
        filledFields++;
      }
    }

    setProgress((filledFields / totalFields) * 100);
  };

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
    navigate("/page-2-living-social", { state: data });
  };

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section className="ecom-wc ecom-wc__full ecom-bg-cover">
        {/* Bara de progresie */}
        <div
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
        </div>

        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    {t("personal_data_form.personal_and_lifestyle")}
                    <span>{t("personal_data_form.personal_and_lifestyle_description")}</span>
                  </h3>

                  {/* Formularele */}
                  <form className="ecom-wc__form-main p-0"
                  onSubmit={handleSubmit}>
                    <div className="row">
                      <SelectDropDown
                        title={t("personal_data_form.ocupation")}
                        size="col-lg-6 col-md-6"
                        name="ocupation"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Ocupatie"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.religion")}
                        size="col-lg-6 col-md-6"
                        name="religion"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Religie"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.dietaryPreferences")}
                        size="col-lg-6 col-md-6"
                        name="dietaryPreferences"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) =>
                            attribute.name == "Preferinte Alimentare"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.sleepingHours")}
                        size="col-lg-6 col-md-6"
                        name="sleepingHours"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Ore de Somn"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.smokingHabbit")}
                        size="col-lg-6 col-md-6"
                        name="smokingHabbit"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Obiceiuri de Fumat"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.alcoholConsumption")}
                        size="col-lg-6 col-md-6"
                        name="alcoholConsumption"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Consum de Alcool"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.petOwnership")}
                        size="col-lg-6 col-md-6"
                        name="petOwnership"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) => attribute.name == "Deținere de Animale"
                        )}
                        handleChange={(e) =>
                          handleAttributeChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("personal_data_form.petPreferences")}
                        size="col-lg-6 col-md-6"
                        name="petPreferences"
                        value={data.attributesIds}
                        data={attributes.filter(
                          (attribute) =>
                            attribute.name == "Preferințe pentru Animale"
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

export default Page1PersonalData;
