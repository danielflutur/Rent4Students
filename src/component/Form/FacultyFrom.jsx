import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import { useTranslation } from "react-i18next";
import FacultyAddressInput from "../AddFaculty/FacultyAddressInput";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import ApiService from "../../services/ApiService";

function FacultyFrom() {
  const { t } = useTranslation();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    encryptedpassword: "DefaultPassword12554",
    phone: "",
    secretaryName: "",
    address: {
      addressDetails: "",
      city: "",
      county: "",
    },
    universityId: auth.id,
  });

  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.post(`Faculties`, input);
      showModal(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error adding faculty:",
        error.response?.data || error.message
      );
    }
    console.log(input);
  };

  const showModal = (record) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("Facultatea a fost adaugata cu success!");
    setIsModalOpen(false);
    navigate("/faculty");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddressChange = (newAddressField) => {
    setInput((prevInput) => ({
      ...prevInput,
      address: {
        ...prevInput.address,
        ...newAddressField,
      },
    }));
  };

  return (
    <section className="pd-top-80 pd-btm-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <div className="homec-submit-form">
                <h4 className="homec-submit-form__title">
                  {t("faculty_information")}
                </h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                    <PropertyTextInput
                      title={t("faculty_name_label")}
                      name="name"
                      value={input.name}
                      handleChange={handleTextChange}
                      placeholder={t("faculty_name_placeholder")}
                    />
                    <PropertyTextInput
                      title={t("secretary_name_label")}
                      name="secretaryName"
                      value={input.secretaryName}
                      handleChange={handleTextChange}
                      placeholder={t("secretary_name_placeholder")}
                    />
                    <PropertyTextInput
                      title={t("email_label")}
                      name="email"
                      value={input.email}
                      handleChange={handleTextChange}
                      placeholder={t("email_placeholder")}
                    />
                    <PropertyTextInput
                      title="Nr. telefon*"
                      name="phone"
                      value={input.phone}
                      handleChange={handleTextChange}
                      placeholder="0744444444"
                    />
                  </div>
                  <FacultyAddressInput
                    address={input.address}
                    handleLocation={handleAddressChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span>{t("add_faculty_button")}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Modal
        title={"Succes"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"OK"}
      >
        <p>
          "Adăugarea facultații a fost făcuta cu success"
        </p>
      </Modal>
      </div>
    </section>
  );
}

export default FacultyFrom;
