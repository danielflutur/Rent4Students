import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../PageLayout/PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { PDFDocument } from 'pdf-lib';
import { jsPDF } from 'jspdf';

function ApplyForRentHelp() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState("processing");
  const [isProcessedBySecretary, setIsProcessedBySecretary] = useState(false);
  const [pdfDocument, setPdfDocument] = useState(null);
  const [formData, setFormData] = useState({
    university: 'Universitatea Suceava',
    faculty: 'FIESC',
    secretary: 'Popescu Maria',
    email: 'maria.popescu@usv.ro',
  });
  const [file, setFile] = useState(null); // State for the uploaded file
  const [filePreview, setFilePreview] = useState(null); // State for file preview
  const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);  // Tracks document upload status
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);  // Tracks form submission status

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true); // Set form submission status to true
    setApplicationStatus("success"); // Example: success status when form is submitted
    setIsProcessedBySecretary(true);
  };

  const handlePdfLoad = async () => {
    try {
      const response = await fetch("https://fiesc.usv.ro/wp-content/uploads/sites/17/2023/01/Declaratie-subventie-cazare-septtembrie-2022.pdf");
      const buffer = await response.arrayBuffer();
      
      const pdfDoc = await PDFDocument.load(buffer);
      const form = pdfDoc.getForm();
      
      const field = form.createTextField('universityName');
      field.setText(formData.university);
      field.addToPage(pdfDoc.getPages()[0], { x: 50, y: 500, width: 200, height: 20 });

      const field2 = form.createTextField('facultyName');
      field2.setText(formData.faculty);
      field2.addToPage(pdfDoc.getPages()[0], { x: 50, y: 450, width: 200, height: 20 });

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePdfGeneration = () => {
    const doc = new jsPDF();
    
    doc.text('Cerere pentru subvenție cazare', 20, 10);
    doc.text(`Universitatea: ${formData.university}`, 20, 30);
    doc.text(`Facultatea: ${formData.faculty}`, 20, 40);
    doc.text(`Secretar: ${formData.secretary}`, 20, 50);
    doc.text(`Email: ${formData.email}`, 20, 60);
    
    doc.save('cerere-subventie.pdf');
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
            <div className="section_form_rent-header">{t("faculty_and_secretary_info")}</div>
            <div className="section_form_rent-content">
              <p><strong>{t("university_label")}:</strong> Universitatea Suceava</p>
              <p><strong>{t("faculty_label")}:</strong> FIESC</p>
              <p><strong>{t("secretary_label")}:</strong> Popescu Maria</p>
              <p><strong>{t("email_label")}:</strong> <a href="mailto:maria.popescu@usv.ro">maria.popescu@usv.ro</a></p>
            </div>
          </section>

          {/* Documente Necesare - Preview PDF */}
          <section className="section_form_rent">
            <div className="section_form_rent-header">{t("required_documents_title")}</div>
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
            <div className="section_form_rent-header">{t("pre_filled_request_title")}</div>
            <div className="section_form_rent-content">
              {pdfDocument ? (
                <div style={{ height: '500px' }}>
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={URL.createObjectURL(new Blob([pdfDocument]))} />
                  </Worker>
                </div>
              ) : (
                <p>Încărcare document...</p>
              )}
            </div>
          </section>

          {/* Încărcare Documente */}
          <section className="section_form_rent">
            <div className="section_form_rent-header">{t("upload_documents_title")}</div>
            <div className="section_form_rent-content">
              <div className="custom-file-input">
                <input 
                  type="file" 
                  multiple 
                  id="fileInput" 
                  className="form-control mb-3"
                  onChange={handleFileChange} // Handle file change
                />
                <label htmlFor="fileInput" className="homec-btn homec-btn__second">
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
                </div>
              )}
              <button className="homec-btn" onClick={handleFormSubmit}>
                <span>{t("submit_application_button")}</span>
              </button>
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
              <div className="section_form_rent-header">{t("application_status_title")}</div>
              <div className={`status ${applicationStatus}`}>
                {applicationStatus === "success" && t("application_sent_message")}
                {applicationStatus === "error" && t("application_error_message")}
                {applicationStatus === "processing" && t("application_processing_message")}
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
