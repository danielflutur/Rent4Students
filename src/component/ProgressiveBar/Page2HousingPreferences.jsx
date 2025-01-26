import { useEffect, useState } from "react";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import PropertyCheckInput from "../Form/PropertyCheckInput";

function Page2HousingPreferences() {
  const [input, setInput] = useState({
    specialization: "",
    studyYear: "",
    county: "",
    locality: "",
    jobStatus: "",
    jobDetails: "",
    nationality: "",
    religion: "",
    placeRentOptions: "",
    rentalType: "",
    apartmentGender: "", // for gender preference of roommates
  });

  const [progress, setProgress] = useState(0); // Stare pentru progres

  // Functia care calculează progresul
  const calculateProgress = () => {
    const totalFields = 9; // Numărul total de câmpuri care trebuie completate, plus cele noi
    let filledFields = 0;

    // Verifică câte câmpuri sunt completate
    for (let key in input) {
      if (input[key] !== "") {
        filledFields++;
      }
    }

    // Calculează procentajul progresului
    setProgress((filledFields / totalFields) * 100);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    calculateProgress(); // Calculează progresul atunci când un câmp este completat
  };

  // Loading Handle
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
         {/* Bara de progresie */}
         <div className="progress-bar-container" style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
          <div
            className="progress-bar"
            style={{
              height: '4px',
              backgroundColor: '#4caf50',  // Culoare verde pentru progres
              width: `${progress}%`,  // Lățimea barei se bazează pe procentajul calculat
              transition: 'width 0.5s ease'  // Efect de tranziție pentru umplerea barei
            }}
          ></div>
        </div>

        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    Preferințe de locuință
                    <span>
                      Acum vom stabili preferințele tale de locuință pentru a-ți
                      oferi cele mai bune sugestii. Completează cu atenție pentru
                      o experiență personalizată!
                    </span>
                  </h3>

                  {/* Formularele */}
                  <form className="ecom-wc__form-main p-0">
                    <div className="row">
                      {/* Întrebare principală (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="placeRentOptions" className="form-label">
                          Ai deja un loc de închiriat?*
                        </label>
                        <select
                          className="form-select"
                          id="placeRentOptions"
                          name="placeRentOptions"
                          value={input.placeRentOptions}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>
                            Alege...
                          </option>
                          <option value="Yes coleg">
                            Da, dar caut un coleg/colegi
                          </option>
                          <option value="Yes help for money">
                            Da, dar vreau să beneficiez mai ușor de ajutor de chirie
                          </option>
                          <option value="No">Nu</option>
                        </select>
                      </div>

                      {/* Tip de chirie - Dropdown */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="rentalType" className="form-label">
                          Cum dorești să închiriezi?
                        </label>
                        <select
                          className="form-select"
                          id="rentalType"
                          name="rentalType"
                          value={input.rentalType}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>
                            Alege tipul de închiriere...
                          </option>
                          <option value="Închiriere solo">Închiriere solo</option>
                          <option value="Închiriere cu un coleg">Închiriere cu un coleg</option>
                          <option value="Închiriere cu mai mulți colegi">
                            Închiriere cu mai mulți colegi
                          </option>
                        </select>
                      </div>

                        {/* Prețul maxim pe lună */}
                        <div className="col-lg-6 col-md-6">
                            <label htmlFor="maxRent" className="form-label">
                              Care este suma maximă pe care ești dispus să o plătești pentru chirie?
                            </label>
                            <input
                              type="number"
                              id="maxRent"
                              name="maxRent"
                              className="form-control"
                              value={input.maxRent}
                              onChange={handleChange}
                              placeholder="Suma maximă"
                            />
                        </div>

                      {/* Zona preferată */}
                      <div className="col-lg-6 col-md-6">
                            <label htmlFor="preferredZone" className="form-label">
                              Selectează zona preferată
                            </label>
                            <input
                              type="text"
                              id="preferredZone"
                              name="preferredZone"
                              className="form-control"
                              value={input.preferredZone}
                              onChange={handleChange}
                              placeholder="Zona preferată"
                            />
                          </div>

                       {/* Preferința pentru navetă */}
                       <div className="col-lg-6 col-md-6">
                        <label htmlFor="commutePreference" className="form-label">
                          Care este preferința ta pentru navetă sau proximitate?
                        </label>
                        <select
                          className="form-select"
                          id="commutePreference"
                          name="commutePreference"
                          value={input.commutePreference}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>
                            Alege opțiunea
                          </option>
                          <option value="Navetă">Navetă</option>
                          <option value="Proximitate">Proximitate</option>
                        </select>
                      </div>

                      {/* Configurația apartamentului */}
                       <div className="col-lg-6 col-md-6">
                        <label htmlFor="apartmentPreference" className="form-label">
                        Cum preferi să fie apartamentul??
                        </label>
                        <select
                          className="form-select"
                          id="apartmentPreference"
                          name="apartmentPreference"
                          value={input.apartmentPreference}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>
                            Alege opțiunea
                          </option>
                          <option value="Navetă">Decomandat</option>
                          <option value="Proximitate">Semidecomandat</option>

                        </select>
                      </div>

                       {/* Gen coleg/colegi - Radio Buttons */}
                        <div className="col-lg-6 col-md-6">
                            <label htmlFor="apartmentGender" className="form-label">
                              Care este preferința ta pentru colegii de apartament?
                            </label>
                            <div className="homec-submit-form__inner">
                              <div className="form-group homec-form-input--list">
                                <div className="form-group homec-form-checkbox mg-top-15">
                                  <input
                                    type="radio"
                                    id="apartmentGenderFeminin"
                                    name="apartmentGender"
                                    value="Feminin"
                                    checked={input.apartmentGender === "Feminin"}
                                    onChange={handleChange}
                                  />
                                  <label className="form-check-label" htmlFor="apartmentGenderFeminin">
                                    Feminin
                                  </label>
                                </div>

                                <div className="form-group homec-form-checkbox mg-top-15">
                                  <input
                                    type="radio"
                                    id="apartmentGenderMasculin"
                                    name="apartmentGender"
                                    value="Masculin"
                                    checked={input.apartmentGender === "Masculin"}
                                    onChange={handleChange}
                                  />
                                  <label className="form-check-label" htmlFor="apartmentGenderMasculin">
                                    Masculin
                                  </label>
                                </div>

                                <div className="form-group homec-form-checkbox mg-top-15">
                                  <input
                                    type="radio"
                                    id="apartmentGenderNuConteaza"
                                    name="apartmentGender"
                                    value="Nu contează"
                                    checked={input.apartmentGender === "Nu contează"}
                                    onChange={handleChange}
                                  />
                                  <label className="form-check-label" htmlFor="apartmentGenderNuConteaza">
                                    Altu
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                    </div>
                    {/* Butonul de submit */}
                    <div className="form-group form-mg-top-30">
                      <div className="ecom-wc__button ecom-wc__button--bottom">
                        <a href="/page-3-home-rules" className="homec-btn homec-btn__second">
                          <span>Următoare pagina</span>
                        </a>
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

export default Page2HousingPreferences;
