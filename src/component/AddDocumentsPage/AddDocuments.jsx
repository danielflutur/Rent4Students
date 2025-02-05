import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import ApiService from "../../services/ApiService";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function AddDocuments() {
  const { t } = useTranslation();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    documents: [],
    requestLetter: null,
    universityId: auth.id,
  });

  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (info, type) => {
    if (type === "documents") {
      setInput({ ...input, documents: info.fileList });
    } else if (type === "requestLetter") {
      setInput({ ...input, requestLetter: info.file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("email", input.email);
      formData.append("phone", input.phone);
      formData.append("universityId", input.universityId);
      input.documents.forEach((file) => formData.append("documents", file.originFileObj));
      if (input.requestLetter) {
        formData.append("requestLetter", input.requestLetter.originFileObj);
      }

      const response = await ApiService.post(`Documents/Upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      showModal(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading documents:", error.response?.data || error.message);
    }
  };

  const showModal = (record) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("Documentele au fost încărcate cu succes!");
    setIsModalOpen(false);
    navigate("/documents");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="pd-top-80 pd-btm-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" onSubmit={handleSubmit}>
              <div className="homec-submit-form">
                <h4 className="homec-submit-form__title">{t("documents_upload_title")}</h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                  </div>

                  <div className="row">
                  <div className="col-12">
                    <label className="upload-label">
                        {t("upload_documents_label")}
                    </label>
                    <Upload
                        multiple
                        onChange={(info) => handleFileChange(info, "documents")}
                        beforeUpload={() => false}
                        fileList={input.documents}
                    >
                        <button type="button" className="homec-btn upload-button">
                        <UploadOutlined className="anticon" /> {t("upload_documents_button")}
                        </button>
                    </Upload>
                    </div>
                    <div className="col-12 mt-3">
                        <label className="upload-label">
                            {t("upload_request_letter_label")}
                        </label>
                        <Upload
                            onChange={(info) => handleFileChange(info, "requestLetter")}
                            beforeUpload={() => false}
                            fileList={input.requestLetter ? [input.requestLetter] : []}
                            accept=".docx, .doc"
                        >
                            <button type="button" className="homec-btn upload-button">
                            <UploadOutlined className="anticon" /> {t("upload_request_letter_button")}
                            </button>
                        </Upload>
                        </div>
                        </div>

                </div>
              </div>

              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span>{t("submit_button")}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <Modal title={"Succes"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={"OK"}>
          <p>Documentele au fost încărcate cu succes!</p>
        </Modal>
      </div>
    </section>
  );
}

export default AddDocuments;
