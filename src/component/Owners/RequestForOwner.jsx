import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";

function RequestForOwner({ previewData, onClose }) {
  const [contractFile, setContractFile] = useState(null);
  const [contractPreviewUrl, setContractPreviewUrl] = useState("");
  const [existingContractUrl, setExistingContractUrl] = useState("");

  useEffect(() => {
    if (previewData.requestDetails.rentStatusId ===1 && previewData.requestDetails.rentContract) {
      const byteCharacters = atob(previewData.requestDetails.rentContract);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const fileBlob = new Blob([byteArray], { type: "application/pdf" });
      setExistingContractUrl(URL.createObjectURL(fileBlob));
    }
  }, [previewData]);

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

  const handleAcceptRequest = async () => {
    if (!contractFile) {
      alert(
        "Vă rugăm să încărcați un contract PDF înainte de a accepta cererea."
      );
      return;
    }

    console.log(previewData);
    const formData = new FormData();
    formData.append("Id", previewData.requestDetails?.id);
    formData.append("RentContract", contractFile);

    try {
      await ApiService.post("Listings/accept-rent", formData);
      alert("Cererea a fost acceptată cu succes!");
      closePreview();
    } catch (error) {
      console.error("Eroare la acceptarea cererii:", error);
      alert("A apărut o eroare. Vă rugăm să încercați din nou.");
    }
  };

  const handleRejectRequest = async () => {
    try {
      await ApiService.post(
        `Listings/reject-rent?id=${previewData.requestDetails?.id}`);
      alert("Cererea a fost respinsă cu succes!");
      closePreview();
    } catch (error) {
      console.error("Eroare la respingerea cererii:", error);
      alert("A apărut o eroare. Vă rugăm să încercați din nou.");
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
            <h4>Detalii Cerere de Închiriere</h4>

            {previewData.requestDetails.rentStatusId ===1 ? (
              <>
                <p>
                  <strong>Stimate Proprietar,</strong>
                </p>
                <p>
                  Apartamentul "{previewData.title}" este deja închiriat de{" "}
                  <strong>{previewData.student1}</strong> și{" "}
                  <strong>{previewData.student2}</strong>
                </p>
                <p>
                  <strong>Contract de închiriere:</strong>
                </p>
                {existingContractUrl && (
                  <embed
                    src={existingContractUrl}
                    type="application/pdf"
                    width="100%"
                    height="500px"
                  />
                )}
              </>
            ) : (
              <>
                <p>
                  <strong>Stimate Proprietar,</strong>
                </p>
                <p>
                  Apartamentul "{previewData.title}" are o cerere de închiriere
                  primită de la studenții{" "}
                  <strong>{previewData.student1}</strong> și{" "}
                  <strong>{previewData.student2}</strong> pentru o perioadă de{" "}
                  {previewData.durata}.
                </p>
                <ul>
                  <li>
                    <strong>Durata închirierii:</strong>{" "}
                    {previewData.durata === "1an" ? "1 an" : "6 luni"}
                  </li>
                </ul>

                <p>
                  <strong>Documente încărcate:</strong>
                </p>
                <p>
                  Studenții au încărcat pozele cărților de identitate pentru
                  facilitarea procesului.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <strong>
                        Carte de identitate - {previewData.student1}:
                      </strong>
                    </p>
                    <img
                      src={previewData.image1}
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
                      <strong>
                        Carte de identitate - {previewData.student2}:
                      </strong>
                    </p>
                    <img
                      src={previewData.image2}
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

                <div className="mt-3">
                  <p>
                    <strong>
                      Pentru a continua, vă rugăm să încărcați contractul de
                      închiriere în format PDF:
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
                  <button
                    className="homec-btn homec-btn__primary"
                    onClick={handleAcceptRequest}
                  >
                    Acceptă Cererea
                  </button>
                  <button
                    className="homec-btn homec-btn__secondary"
                    onClick={handleRejectRequest}
                  >
                    Respinge Cererea
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestForOwner;
