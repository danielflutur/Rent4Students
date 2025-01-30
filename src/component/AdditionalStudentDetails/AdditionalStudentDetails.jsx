import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";
import { useLocation } from "react-router-dom";
import StudentAddressInput from "./StudentAddressInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { nationalities } from "../../data/nationalities";
import { genders } from "../../data/genders";
import ApiService from "../../services/ApiService";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { useNavigate } from "react-router-dom";

function AdditionalStudentDetails() {
  const { t } = useTranslation();
  const { state: inputData } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(inputData || {});
  const [isLoading, setisLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      birthDate: date,
    }));
  };

  const handleAddressChange = (newAddressField) => {
    setFormData((prevInput) => ({
      ...prevInput,
      address: {
        ...prevInput.address,
        ...newAddressField,
      },
    }));
  };

  const handleNationalityChange = (selectedId) => {
    setFormData((prevInput) => ({
      ...prevInput,
      nationalityId: selectedId,
    }));
  };

  const handleGenderChange = (selectedId) => {
    setFormData((prevInput) => ({
      ...prevInput,
      genderId: selectedId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        encryptedPassword: formData.encryptedPassword,
        phone: formData.phone,
        studentIdNumber: formData.studentIdNumber,
        age: 23,
        yearOfStudy: formData.yearOfStudy,
        genderId: formData.genderId,
        nationalityId: formData.nationalityId,
        facultyId: formData.facultyId,
        address: {
          addressDetails: formData.address.addressDetails,
          city: formData.address.city,
          county: formData.address.county,
        },
        hobbiesIds: [],
        allergiesIds: [],
        attributesIds: [],
        livingPreferencesIds: [],
      };
      const response = await ApiService.post('Students', data);
      navigate("/welcome-students", { state: response.data });
    } catch (error) {
      console.error(
        "Error creating listing:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    setisLoading(false);
  }, [inputData]);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section className="ecom-wc ecom-wc__full ecom-bg-cover">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    {t("form.additional_info")}
                    <span>{t("form.additional_info_description")}</span>
                  </h3>

                  <form
                    className="ecom-wc__form-main p-0"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <PropertyTextInput
                          title={t("form.studentIdNumber")}
                          name="studentIdNumber"
                          value={formData.studentIdNumber}
                          handleChange={handleChange}
                          placeholder="12334"
                        />
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <PropertyTextInput
                          title={t("form.yearOfStudy")}
                          name="yearOfStudy"
                          value={formData.yearOfStudy}
                          handleChange={handleChange}
                          placeholder="2"
                        />
                      </div>

                      <SelectDropDown
                        title={t("form.nationality")}
                        size="col-lg-6 col-md-6"
                        name="nationalityId"
                        value={formData.nationalityId}
                        defaultValueId={nationalities
                          .filter((nationality) => nationality.id === 144)
                          .map((nationality) => ({
                            value: nationality.name,
                            id: nationality.id,
                          }))}
                        data={nationalities.map((nationality) => ({
                          value: nationality.name,
                          id: nationality.id,
                        }))}
                        handleChange={(e) =>
                          handleNationalityChange(e.target.value)
                        }
                      />

                      <SelectDropDown
                        title={t("form.gender")}
                        size="col-lg-6 col-md-6"
                        name="genderId"
                        value={formData.genderId}
                        data={genders.map((gender) => ({
                          value: gender.name,
                          id: gender.id,
                        }))}
                        handleChange={(e) => handleGenderChange(e.target.value)}
                      />

                      <div className="col-lg-6 col-md-6">
                        <label htmlFor="birthDate" className="form-label">
                          {t("form.birthDate")}
                        </label>
                        <div className="col-lg-6 col-md-6">
                          <DatePicker
                            selected={formData.birthDate}
                            onChange={handleDateChange}
                            className="form-control"
                            dateFormat="yyyy-MM-dd"
                            showYearDropdown
                            scrollableYearDropdown
                          />
                        </div>
                      </div>
                    </div>
                    <StudentAddressInput
                      address={formData.address}
                      handleLocation={handleAddressChange}
                      className="mb-4"
                    />

                    <div className="form-group form-mg-top-30">
                      <div className="ecom-wc__button ecom-wc__button--bottom">
                        <button
                          type="submit"
                          className="homec-btn homec-btn__second"
                        >
                          <span>{t("form.nextPage")}</span>
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

export default AdditionalStudentDetails;
