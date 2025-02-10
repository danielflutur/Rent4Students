import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../PageLayout/PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useAuth } from "../../context/AuthProvider";
import ApiService from "../../services/ApiService";
import { PDFDocument } from "pdf-lib";
import { useUser } from "../../context/AuthDetailsProvider";

function ApplyForRentHelp() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState("processing");
  const [isProcessedBySecretary, setIsProcessedBySecretary] = useState(false);
  const [pdfDocument, setPdfDocument] = useState(null);
  const [formData, setFormData] = useState({
    university: "Universitatea Suceava",
    faculty: "FIESC",
    secretary: "Popescu Maria",
    email: "maria.popescu@usv.ro",
  });
  const [file, setFile] = useState(null); // State for the uploaded file
  const [filePreview, setFilePreview] = useState(null); // State for file preview
  const [isDocumentUploaded, setIsDocumentUploaded] = useState(false); // Tracks document upload status
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Tracks form submission status
  const { user } = useUser();
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const fetchPreFilledPdf = async () => {
      if (!user || !user.facultyId || !user.id) return;
      try {
        const response = await ApiService.get(
          `FinancialHelpDocument/download-template/`,
          {
            facultyId: user.facultyId,
            studentId: user.id,
          },
          {
            responseType: "arraybuffer", // Ensure we get binary data
            headers: { Accept: "application/pdf" },
          }
        );
        const blob = new Blob([response.data], { type: "application/pdf" });
        const pdfObjectUrl = URL.createObjectURL(blob);
        setPdfUrl(pdfObjectUrl);
      } catch (error) {
        console.error("Error fetching the pre-filled PDF:", error);
      }
    };

    fetchPreFilledPdf();
    setIsLoading(false);
  }, [user]);

  const handleFormSubmit = async () => {
    if (!file) {
      alert("Please upload a file before submitting.");
      return;
    }

    try {
      const reqData = new FormData();
      reqData.append("studentId", user.id);
      reqData.append("file", file); // Attach the uploaded file

      const response = await ApiService.post(
        "FinancialHelpDocument/student-documents",
        reqData
      );

      setIsFormSubmitted(true);
      setApplicationStatus("success");
      setIsProcessedBySecretary(true);

      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading document:", error);
      setApplicationStatus("error");
    }
  };

  const handlePdfLoad = async () => {
    try {
      const response = await fetch(
        "https://fiesc.usv.ro/wp-content/uploads/sites/17/2023/01/Declaratie-subventie-cazare-septtembrie-2022.pdf"
      );
      const buffer = await response.arrayBuffer();

      const pdfDoc = await PDFDocument.load(buffer);
      const form = pdfDoc.getForm();

      const field = form.createTextField("universityName");
      field.setText(formData.university);
      field.addToPage(pdfDoc.getPages()[0], {
        x: 50,
        y: 500,
        width: 200,
        height: 20,
      });

      const field2 = form.createTextField("facultyName");
      field2.setText(formData.faculty);
      field2.addToPage(pdfDoc.getPages()[0], {
        x: 50,
        y: 450,
        width: 200,
        height: 20,
      });

      const pdfBytes = await pdfDoc.save();
      setPdfDocument(pdfBytes);
    } catch (error) {
      console.error("Eroare la încărcarea PDF-ului:", error);
    }
  };

  useEffect(() => {
    handlePdfLoad();
  }, [formData]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // If a document is uploaded, set `isDocumentUploaded` to true
    if (selectedFile) {
      setIsDocumentUploaded(true);

      // Create a preview if it's a PDF
      if (selectedFile && selectedFile.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile); // Read the PDF as Data URL for preview
      }
    }
  };

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <PageLayout>
        <Breadcrumbs
          title={t("rent_help_title")}
          titlePosition="bottom"
          background="url(img/bread-overlay.jpg)"
        />

        <div className="page-form-container">
          {/* Informații Facultate */}
          <section className="section_form_rent">
            <div className="section_form_rent-header">
              {t("faculty_and_secretary_info")}
            </div>
            <div className="section_form_rent-content">
              <p>
                <strong>{t("university_label")}:</strong> Universitatea Stefan Cel Mare Suceava
              </p>
              <p>
                <strong>{t("faculty_label")}:</strong> Facultatea de Inginerie Electrica
              </p>
              <p>
                <strong>{t("secretary_label")}:</strong> Laura Popovici
              </p>
              <p>
                <strong>{t("email_label")}:</strong>{" "}
                <a href="mailto:maria.popescu@usv.ro">secretarfacultate1@gmail.com</a>
              </p>
            </div>
          </section>

          {/* Documente Necesare - Preview PDF */}
          <section className="section_form_rent">
            <div className="section_form_rent-header">
              {t("required_documents_title")}
            </div>
            <div className="section_form_rent-content">
              <embed
                src="https://fiesc.usv.ro/wp-content/uploads/sites/17/2024/09/Informatii-subventie-sept.pdf"
                type="application/pdf"
                width="100%"
                height="600px"
                style={{ border: "none", borderRadius: "8px" }}
              />
            </div>
          </section>

          {/* Cererea Precompletată - Vizualizare Editabilă */}
          <section className="section_form_rent">
            <div className="section_form_rent-header">
              {t("pre_filled_request_title")}
            </div>
            <div className="section_form_rent-content">
              {isLoading ? (
                <Preloader />
              ) : pdfUrl ? (
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  style={{ border: "none", borderRadius: "8px" }}
                />
              ) : (
                <p>{t("error_loading_pdf")}</p>
              )}
            </div>
          </section>

          {/* Încărcare Documente */}
          <section className="section_form_rent">
            <div className="section_form_rent-header">
              {t("upload_documents_title")}
            </div>
            <div className="section_form_rent-content">
              <div className="custom-file-input">
                <input
                  type="file"
                  multiple
                  id="fileInput"
                  className="form-control mb-3"
                  onChange={handleFileChange} // Handle file change
                />
                <label
                  htmlFor="fileInput"
                  className="homec-btn homec-btn__second"
                >
                  {t("choose_files_button")}
                </label>
              </div>
              {file && file.type === "application/pdf" && filePreview && (
                <div style={{ marginTop: "20px" }}>
                  <h5>{t("uploaded_pdf_preview")}</h5>
                  <embed
                    src={filePreview}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                    style={{ borderRadius: "8px" }}
                  />
                  <button className="homec-btn" onClick={handleFormSubmit}>
                    <span>{t("submit_application_button")}</span>
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Secțiune Procesare de către Secretar */}
          {isProcessedBySecretary && (
            <section className="section_form_rent">
              <div className="section_form_rent-header">
                {t("application_processing_by_secretary_title")}
              </div>
              <div className="section_form_rent-content">
                <p>{t("application_processing_by_secretary_message")}</p>
              </div>
            </section>
          )}

          {/* Statusul Cererii */}
          {isDocumentUploaded && isFormSubmitted && (
            <section className="section_form_rent">
              <div className="section_form_rent-header">
                {t("application_status_title")}
              </div>
              <div className={`status ${applicationStatus}`}>
                {applicationStatus === "success" &&
                  t("application_sent_message")}
                {applicationStatus === "error" &&
                  t("application_error_message")}
                {applicationStatus === "processing" &&
                  t("application_processing_message")}
              </div>
            </section>
          )}
        </div>
        <GoTopBtn />
      </PageLayout>
    );
  }

  return component;
}

export default ApplyForRentHelp;
