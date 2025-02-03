import { useState, useEffect } from "react";
import PropertyTextInput from "./PropertyTextInput";
import { useLocation, useNavigate } from "react-router-dom";
import Preloader from "../Loader";
import { Modal } from "antd";
import ApiService from "../../services/ApiService";

function EditFacultyFrom() {
  const { state: inputData} = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);
const [input, setInput] = useState({
  name: inputData.name,
  secretaryName: inputData.secretary,
  email: inputData.email
});
  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.put(`Faculties/${inputData.key}`, input);
      showModal(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error updating faculty:",
        error.response?.data || error.message
      );
    }
  };

  const showModal = (record) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("Facultatea a fost editata cu success!");
    setIsModalOpen(false);
    navigate("/faculty");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    useEffect(() => {
      setisLoading(false);
    }, [inputData]);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
    <section className="pd-top-80 pd-btm-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <div className="homec-submit-form">
                <h4 className="homec-submit-form__title">
                  Informații Facultate
                </h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                    <PropertyTextInput
                      title="Nume Facultate*"
                      name="name"
                      value={input.name}
                      handleChange={handleTextChange}
                      placeholder="Nume"
                    />
                    <PropertyTextInput
                      title="Secretar*"
                      name="secretaryName"
                      value={input.secretaryName}
                      handleChange={handleTextChange}
                      placeholder="Nume și Prenume Secretar"
                    />
                    <PropertyTextInput
                      title="Email*"
                      name="email"
                      value={input.email}
                      handleChange={handleTextChange}
                      placeholder="secretar@gmail.com"
                    />
              </div>
              </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span>Editează Faculate</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Modal for Delete Confirmation */}
      <Modal
        title={"Succes"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"OK"}
      >
        <p>
          "Editarea facultații a fost facuta cu success"
        </p>
      </Modal>
      </div>
    </section>
  );
}

return component;
}
export default EditFacultyFrom;
