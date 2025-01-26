import { useEffect, useState } from "react";
import Preloader from "../Loader";

function Page3HouseRules() {
  const [input, setInput] = useState({
    sleepPreference: [],
    cleanlinessHabits: [],
    cookingHabits: [],
    alcoholConsumption: [],
    smokingHabits: [],
    noiseTolerance: [],
    studyEnvironment: [],
    guestTolerance: [],
    petPreferences: [],
    petsOwnership: [],
  });

  const [progress, setProgress] = useState(0); // stare pentru progres

  // Functia care calculează progresul
  const calculateProgress = () => {
    const totalFields = 10; // Numărul total de câmpuri relevante
    let filledFields = 0;

    // Verifică câte câmpuri sunt completate
    for (let key in input) {
      if (Array.isArray(input[key]) ? input[key].length > 0 : input[key] !== "") {
        filledFields++;
      }
    }

    // Calculează procentajul progresului
    setProgress((filledFields / totalFields) * 100);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Dacă este checkbox, adaugă sau elimină opțiunea selectată
      const updatedValue = checked
        ? [...input[name], value]
        : input[name].filter((item) => item !== value);

      setInput({ ...input, [name]: updatedValue });
    } else if (type === "radio") {
      // Dacă este radio button, setează valoarea selectată
      setInput({ ...input, [name]: [value] });
    }

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
        <div className="progress-bar-container" style={{ width: "100%", position: "absolute", top: 0, left: 0, zIndex: 10 }}>
          <div
            className="progress-bar"
            style={{
              height: "4px",
              backgroundColor: "#4caf50", // Culoare verde pentru progres
              width: `${progress}%`, // Lățimea barei se bazează pe procentajul calculat
              transition: "width 0.5s ease", // Efect de tranziție pentru umplerea barei
            }}
          ></div>
        </div>

        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    Reguli de conviețuire
                    <span>
                      Pentru a găsi colegi și un mediu care să se potrivească stilului tău de viață, completează următoarele informații
                      despre preferințele și obiceiurile tale.
                    </span>
                  </h3>

                  {/* Formularele */}
                  <form className="ecom-wc__form-main p-0">
                  <div className="row">
  {/* Ore de somn */}
  <div className="col-lg-12 mb-4">
    <label htmlFor="sleepPreference" className="form-label">
      Cum preferi să-ți organizezi orele de somn?
    </label>
    <div className="form-group homec-form-checkbox">
      <div className="form-check">
        <input
          type="radio"
          id="sleepMatinal"
          name="sleepPreference"
          value="Sunt matinal"
          checked={input.sleepPreference.includes("Sunt matinal")}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="sleepMatinal">
          Sunt matinal
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          id="sleepNoaptea"
          name="sleepPreference"
          value="Prefer să dorm mai mult dimineața și sunt mai activ noaptea"
          checked={input.sleepPreference.includes("Prefer să dorm mai mult dimineața și sunt mai activ noaptea")}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="sleepNoaptea">
          Activ noaptea
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          id="sleepProgramStrict"
          name="sleepPreference"
          value="Am un program strict de somn"
          checked={input.sleepPreference.includes("Am un program strict de somn")}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="sleepProgramStrict">
          Program strict de somn
        </label>
      </div>
    </div>
  </div>
</div>

                      {/* Obiceiuri de curățenie */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="cleanlinessHabits" className="form-label">
                          Care este nivelul tău de organizare?
                        </label>
                        <div className="form-group homec-form-input--list">
                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="cleanlinessOrganized"
                              name="cleanlinessHabits"
                              value="Foarte organizat"
                              checked={input.cleanlinessHabits.includes("Foarte organizat")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="cleanlinessOrganized">
                              Foarte organizat
                            </label>
                          </div>

                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="cleanlinessModeratelyOrganized"
                              name="cleanlinessHabits"
                              value="Moderat organizat"
                              checked={input.cleanlinessHabits.includes("Moderat organizat")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="cleanlinessModeratelyOrganized">
                              Moderat organizat
                            </label>
                          </div>

                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="cleanlinessLessOrganized"
                              name="cleanlinessHabits"
                              value="Mai puțin organizat"
                              checked={input.cleanlinessHabits.includes("Mai puțin organizat")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="cleanlinessLessOrganized">
                              Mai puțin organizat
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Obiceiuri de gătit */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="cookingHabits" className="form-label">
                          Cât de des gătești?
                        </label>
                        <div className="form-group homec-form-input--list">
                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="cookingDaily"
                              name="cookingHabits"
                              value="Gătesc zilnic"
                              checked={input.cookingHabits.includes("Gătesc zilnic")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="cookingDaily">
                              Gătesc zilnic
                            </label>
                          </div>

                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="cookingOccasionally"
                              name="cookingHabits"
                              value="Gătesc ocazional"
                              checked={input.cookingHabits.includes("Gătesc ocazional")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="cookingOccasionally">
                              Gătesc ocazional
                            </label>
                          </div>

                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="cookingNotAtAll"
                              name="cookingHabits"
                              value="Nu gătesc"
                              checked={input.cookingHabits.includes("Nu gătesc")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="cookingNotAtAll">
                              Nu gătesc
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Consum de alcool */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="alcoholConsumption" className="form-label">
                          Care sunt obiceiurile tale legate de consumul de alcool?
                        </label>
                        <div className="form-group homec-form-input--list">
                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="alcoholModerate"
                              name="alcoholConsumption"
                              value="Consum moderat"
                              checked={input.alcoholConsumption.includes("Consum moderat")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="alcoholModerate">
                              Consum moderat
                            </label>
                          </div>

                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="alcoholOccasional"
                              name="alcoholConsumption"
                              value="Doar ocazional/social"
                              checked={input.alcoholConsumption.includes("Doar ocazional/social")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="alcoholOccasional">
                              Doar ocazional/social
                            </label>
                          </div>

                          <div className="form-group homec-form-checkbox mg-top-15">
                            <input
                              type="checkbox"
                              id="alcoholNone"
                              name="alcoholConsumption"
                              value="Nu consum"
                              checked={input.alcoholConsumption.includes("Nu consum")}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="alcoholNone">
                              Nu consum
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Obiceiuri de fumat */}
                      

                      {/* Toleranță la zgomot */}
                      

                      {/* Mediul de studiu */}
                      

                      {/* Toleranța la oaspeți */}
                      

                      {/* Preferințe pentru animale */}
                      

                      {/* Deținere de animale */}
                      
                    

                    {/* Butonul de Acțiune */}
                    <div className="ecom-wc__form-btns">
                      <button type="button" className="ecom-btn" onClick={() => alert('Informațiile salvate!')}>
                        Continuă
                      </button>
                    </div>
                    <div className="ecom-wc__form-footer">
                      <span>Aceste informații ne ajută să găsim cel mai bun match pentru stilul tău de viață.</span>
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

export default Page3HouseRules;
