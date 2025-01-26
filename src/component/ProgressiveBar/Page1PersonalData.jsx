import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Importă useTranslation pentru traduceri
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";

function Page1PersonalData() {
  const { t } = useTranslation(); // Accesarea funcției de traducere

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

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    calculateProgress();
  };

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
              backgroundColor: '#4caf50',
              width: `${progress}%`,
              transition: 'width 0.5s ease'
            }}
          ></div>
        </div>

        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    {t('form.universityName')}
                    <span>
                      {t('form.description')}
                    </span>
                  </h3>

                  {/* Formularele */}
                  <form className="ecom-wc__form-main p-0">
                    <div className="row">
                      {/* Universitatea (Autocompletat) */}
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t('form.universityName')}
                        name="universityName"
                        value={input.universityName}
                        handleChange={handleChange}
                        placeholder={t('form.university_name')}
                        disabled={true} 
                      />

                      {/* Facultatea sau Programul de Master (Autocompletat) */}
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title={t('form.facultyName')}
                        name="facultyName"
                        value={input.facultyName}
                        handleChange={handleChange}
                        placeholder={t('form.faculty_name')}
                        disabled={true} 
                      />

                      {/* Specializarea (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="specialization" className="form-label">{t('form.specialization')}</label>
                        <select
                          className="form-select"
                          id="specialization"
                          name="specialization"
                          value={input.specialization}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>{t('form.selectSpecialization')}</option>
                          <option value="Informatica">{t('form.informatics')}</option>
                          <option value="Inginerie electrica">{t('form.electricalEngineering')}</option>
                          <option value="Matematica">{t('form.mathematics')}</option>
                          <option value="Biologie">{t('form.biology')}</option>
                        </select>
                      </div>

                      {/* An de studiu (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="studyYear" className="form-label">{t('form.studyYear')}</label>
                        <select
                          className="form-select"
                          id="studyYear"
                          name="studyYear"
                          value={input.studyYear}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>{t('form.selectStudyYear')}</option>
                          <option value="1">{t('form.year1')}</option>
                          <option value="2">{t('form.year2')}</option>
                          <option value="3">{t('form.year3')}</option>
                          <option value="4">{t('form.year4')}</option>
                          <option value="5">{t('form.year5')}</option>
                          <option value="6">{t('form.year6')}</option>
                        </select>
                      </div>

                      {/* Județ (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="county" className="form-label">{t('form.county')}</label>
                        <select
                          className="form-select"
                          id="county"
                          name="county"
                          value={input.county}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>{t('form.selectCounty')}</option>
                          <option value="Cluj">Cluj</option>
                          <option value="București">București</option>
                          <option value="Timiș">Timiș</option>
                          <option value="Iași">Iași</option>
                        </select>
                      </div>

                      {/* Localitate (Dropdown) */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="locality" className="form-label">{t('form.locality')}</label>
                        <select
                          className="form-select"
                          id="locality"
                          name="locality"
                          value={input.locality}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>{t('form.selectLocality')}</option>
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
                        <label htmlFor="jobStatus" className="form-label">{t('form.jobStatus')}</label>
                        <select
                          className="form-select"
                          id="jobStatus"
                          name="jobStatus"
                          value={input.jobStatus}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>{t('form.selectJobStatus')}</option>
                          <option value="Full-Time">{t('form.fullTime')}</option>
                          <option value="Part-Time">{t('form.partTime')}</option>
                          <option value="Nu am un job">{t('form.noJob')}</option>
                        </select>
                      </div>

                      {/* Detalii job */}
                      {input.jobStatus !== "Nu am un job" && (
                        <div className="col-lg-6 col-md-6">
                          <label htmlFor="jobDetails" className="form-label">{t('form.jobDetails')}</label>
                          <input
                            type="text"
                            id="jobDetails"
                            name="jobDetails"
                            className="form-control"
                            placeholder={t('form.jobDetailsPlaceholder')}
                            value={input.jobDetails}
                            onChange={handleChange}
                          />
                        </div>
                      )}

                      {/* Naționalitate */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="nationality" className="form-label">{t('form.nationality')}</label>
                        <select
                          className="form-select"
                          id="nationality"
                          name="nationality"
                          value={input.nationality}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>{t('form.selectNationality')}</option>
                          <option value="Română">{t('form.romanian')}</option>
                          <option value="Altă naționalitate">{t('form.otherNationality')}</option>
                        </select>
                        {input.nationality === "Altă naționalitate" && (
                          <input
                            type="text"
                            id="otherNationality"
                            name="otherNationality"
                            className="form-control mt-2"
                            placeholder={t('form.specifyNationality')}
                            value={input.otherNationality}
                            onChange={handleChange}
                          />
                        )}
                      </div>

                      {/* Religia */}
                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="religion" className="form-label">{t('form.religion')}</label>
                        <select
                          className="form-select"
                          id="religion"
                          name="religion"
                          value={input.religion}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected>{t('form.selectReligion')}</option>
                          <option value="Ortodox">{t('form.orthodox')}</option>
                          <option value="Catolic">{t('form.catholic')}</option>
                          <option value="Reformat">{t('form.reformed')}</option>
                          <option value="Pentecostal">{t('form.pentecostal')}</option>
                          <option value="Ateu/Agnostic">{t('form.atheist')}</option>
                          <option value="Altă religie">{t('form.otherReligion')}</option>
                        </select>
                        {input.religion === "Altă religie" && (
                          <input
                            type="text"
                            id="otherReligion"
                            name="otherReligion"
                            className="form-control mt-2"
                            placeholder={t('form.specifyReligion')}
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
                          <span>{t('form.nextPage')}</span>
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
