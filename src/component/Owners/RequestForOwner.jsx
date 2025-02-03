import PropTypes from "prop-types";
import { useState } from "react";

function RequestForOwner({ previewData, onClose }) {
  const [contractFile, setContractFile] = useState(null);
  const [contractPreviewUrl, setContractPreviewUrl] = useState("");

  const closePreview = () => {
    onClose();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setContractFile(file);
      const fileUrl = URL.createObjectURL(file);
      setContractPreviewUrl(fileUrl);
    }
  };

  return (
    <div
      className="homec-modal modal fade show"
      id="invoice_view"
      tabIndex="-1"
      aria-labelledby="invoice_view"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="homec-modal__width modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="homec-moal__close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closePreview}
          >
            X
          </button>

          <div className="homec-modal__inner">
            {/* Titlu actualizat */}
            <h4>Detalii Cerere de Închiriere</h4>
            <p>
              <strong>Stimate Proprietar,</strong>
            </p>
            <p>
              Apartamentul "{previewData.title}" are o cerere de închiriere primită de la studenții{" "}
              <strong>{previewData.student1}</strong> și <strong>{previewData.student2}</strong> pentru o perioadă de{" "}
              {previewData.durata}.
            </p>
            <ul>
              <li>
                <strong>Durata închirierii:</strong>{" "}
                {previewData.durata === "1an" ? "1 an" : "6 luni"}
              </li>
              <li>
                <strong>Contract ANAF solicitat:</strong>{" "}
                {previewData.contractANAF === "yes" ? "Da" : "Nu"}
              </li>
            </ul>

            <p>
              <strong>Documente încărcate:</strong>
            </p>
            <p>
              Studenții au încărcat pozele cărților de identitate pentru facilitarea procesului.
            </p>

            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Carte de identitate - {previewData.student1}:</strong>
                </p>
                <img
                  src="img/buletin_1.jpg"
                  alt="Carte de identitate 1"
                  className="img-fluid"
                  width="200"
                />
                <br />
                <a
                  href="img/buletin_1.jpg"
                  download
                  className="btn btn-primary mt-2"
                >
                  Descarcă
                </a>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Carte de identitate - {previewData.student2}:</strong>
                </p>
                <img
                  src="img/buletin_2.jpg"
                  alt="Carte de identitate 2"
                  className="img-fluid"
                  width="200"
                />
                <br />
                <a
                  href="img/buletin_2.jpg"
                  download
                  className="btn btn-primary mt-2"
                >
                  Descarcă
                </a>
              </div>
            </div>

            <hr />

            {/* Secțiunea de upload pentru contractul PDF */}
            <div className="mt-3">
              <p>
                <strong>
                  Pentru a continua, vă rugăm să încărcați contractul de închiriere în format PDF:
                </strong>
              </p>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </div>

            {contractPreviewUrl && (
              <div className="mt-3">
                <p>
                  <strong>Preview Contract PDF:</strong>
                </p>
                <embed
                  src={contractPreviewUrl}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                />
              </div>
            )}

            <div className="d-flex justify-content-between mt-3">
              {/* Butoane de acțiune pentru proprietar */}
              <button className="homec-btn homec-btn__primary" onClick={() => {}}>
                Acceptă Cererea
              </button>
              <button className="homec-btn homec-btn__secondary" onClick={() => {}}>
                Respinge Cererea
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RequestForOwner.propTypes = {
  previewData: PropTypes.shape({
    student1: PropTypes.string.isRequired,
    student2: PropTypes.string.isRequired,
    durata: PropTypes.string.isRequired,
    contractANAF: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    idImage1: PropTypes.string.isRequired,
    idImage2: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RequestForOwner;
