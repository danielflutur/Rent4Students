import { useEffect, useState } from "react";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";

function Page1PersonalData() {
  const [input, setInput] = useState({
    specialization: "",
    studyYear: "",
    county: "",
    locality: "",
    jobStatus: "",
    jobDetails: "",
    nationality: "",
    religion: "",
  });

  const [progress, setProgress] = useState(0); // Stare pentru progres

  // Functia care calculează progresul
  const calculateProgress = () => {
    const totalFields = 8; // Numărul total de câmpuri care trebuie completate
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
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(false);
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
                    Completează-ți datele personale
                    <span>
                      Aceste informații ne vor ajuta să îți personalizăm experiența și să îți oferim cele mai bune recomandări. O parte dintre detalii au fost preluate automat din procesul de înregistrare.
                    </span>
                  </h3>

                  {/* Formularele */}
                  <form className="ecom-wc__form-main p-0">
                    <div className="row">
                      {/* Universitatea (Autocompletat) */}
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Universitatea ta*"
                        name="universityName"
                        value={input.universityName}
                        handleChange={handleChange}
                        placeholder="Universitatea ta"
                        disabled={true} // Presupunând că este autocompletat din înregistrare
                      />

                      {/* Facultatea sau Programul de Master (Autocompletat) */}
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Facultatea ta*"
                        name="facultyName"
                        value={input.facultyName}
                        handleChange={handleChange}
                        placeholder="Facultatea ta"
                        disabled={true} // Presupunând că este autocompletat din înregistrare
                      />

                      {/* Specializarea (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="specialization" className="form-label">Specializare*</label>
                        <select
                          className="form-select"
                          id="specialization"
                          name="specialization"
                          value={input.specialization}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>Alege specializarea...</option>
                          <option value="Informatica">Informatica</option>
                          <option value="Inginerie electrica">Inginerie electrica</option>
                          <option value="Matematica">Matematica</option>
                          <option value="Biologie">Biologie</option>
                        </select>
                      </div>

                      {/* An de studiu (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="studyYear" className="form-label">An de studiu*</label>
                        <select
                          className="form-select"
                          id="studyYear"
                          name="studyYear"
                          value={input.studyYear}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>Alege anul de studiu...</option>
                          <option value="1">Anul 1</option>
                          <option value="2">Anul 2</option>
                          <option value="3">Anul 3</option>
                          <option value="4">Anul 4</option>
                          <option value="5">Anul 5</option>
                          <option value="6">Anul 6</option>
                        </select>
                      </div>

                      {/* Județ (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="county" className="form-label">Județ*</label>
                        <select
                          className="form-select"
                          id="county"
                          name="county"
                          value={input.county}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>Alege județul...</option>
                          <option value="Cluj">Cluj</option>
                          <option value="București">București</option>
                          <option value="Timiș">Timiș</option>
                          <option value="Iași">Iași</option>
                        </select>
                      </div>

                      {/* Localitate (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="locality" className="form-label">Localitatea*</label>
                        <select
                          className="form-select"
                          id="locality"
                          name="locality"
                          value={input.locality}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>Alege localitatea...</option>
                          <option value="Cluj-Napoca">Cluj-Napoca</option>
                          <option value="București">București</option>
                          <option value="Timișoara">Timișoara</option>
                          <option value="Iași">Iași</option>
                          <option value="Constanța">Constanța</option>
                          <option value="Brașov">Brașov</option>
                          <option value="Sibiu">Sibiu</option>
                        </select>
                      </div>

                      {/* Statut Profesional */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="jobStatus" className="form-label">Pe lângă student, ai un job?</label>
                        <select
                          className="form-select"
                          id="jobStatus"
                          name="jobStatus"
                          value={input.jobStatus}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>Selectează statutul</option>
                          <option value="Full-Time">Full-Time</option>
                          <option value="Part-Time">Part-Time</option>
                          <option value="Nu am un job">Nu am un job</option>
                        </select>
                      </div>

                      {/* Detalii job */}
                      {input.jobStatus !== "Nu am un job" && (
                        <div className="col-lg-6 col-md-6">
                          <label htmlFor="jobDetails" className="form-label">Care este jobul tău?</label>
                          <input
                            type="text"
                            id="jobDetails"
                            name="jobDetails"
                            className="form-control"
                            placeholder="Introduceți detaliile jobului"
                            value={input.jobDetails}
                            onChange={handleChange}
                          />
                        </div>
                      )}

                      {/* Naționalitate */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="nationality" className="form-label">Naționalitatea*</label>
                        <select
                          className="form-select"
                          id="nationality"
                          name="nationality"
                          value={input.nationality}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>Selectează naționalitatea</option>
                          <option value="Română">Română</option>
                          <option value="Altă naționalitate">Altă naționalitate</option>
                        </select>
                        {input.nationality === "Altă naționalitate" && (
                          <input
                            type="text"
                            id="otherNationality"
                            name="otherNationality"
                            className="form-control mt-2"
                            placeholder="Specificați naționalitatea"
                            value={input.otherNationality}
                            onChange={handleChange}
                          />
                        )}
                      </div>

                      {/* Religia */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="religion" className="form-label">Religia*</label>
                        <select
                          className="form-select"
                          id="religion"
                          name="religion"
                          value={input.religion}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>Selectează religia</option>
                          <option value="Ortodox">Ortodox</option>
                          <option value="Catolic">Catolic</option>
                          <option value="Reformat">Reformat</option>
                          <option value="Pentecostal">Pentecostal</option>
                          <option value="Ateu/Agnostic">Ateu/Agnostic</option>
                          <option value="Altă religie">Altă religie</option>
                        </select>
                        {input.religion === "Altă religie" && (
                          <input
                            type="text"
                            id="otherReligion"
                            name="otherReligion"
                            className="form-control mt-2"
                            placeholder="Specificați religia"
                            value={input.otherReligion}
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </div>

                    {/* Butonul de submit */}
                    <div className="form-group form-mg-top-30">
                      <div className="ecom-wc__button ecom-wc__button--bottom">
                        <a href="/page-2-housing-preferences" className="homec-btn homec-btn__second">
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

export default Page1PersonalData;
