import PropTypes from "prop-types";
import { useState } from "react";
import SearchColleagues from "../Form/SearchColleagues";
import { CompatibleStudentsProvider } from "../../context/CompatibleStudentsProvider";
import ApiService from "../../services/ApiService";
import { useAuth } from "../../context/AuthProvider";
import { useUser } from "../../context/AuthDetailsProvider";

function RentalRequestModal({ isOpen, onClose, onSubmit, listingId }) {
  const [q1, setQ1] = useState("");
  const [colleagueCount, setColleagueCount] = useState("");
  const [q2, setQ2] = useState("");
  const [identityFiles, setIdentityFiles] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedColleagues, setSelectedColleagues] = useState([]); // Lifted state
  const [previewData, setPreviewData] = useState(null); // Data for preview
  const { user } = useUser();

  const handleFileChange = (e) => {
    const files = e.target.files;
    setIdentityFiles(files);

    // Create a preview for each selected image
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Callback from SearchColleagues to update the list of selected colleagues
  const handleSelectedColleaguesChange = (newSelected) => {
    
    setSelectedColleagues(newSelected);
  };

  const handleRentalSubmit = (e) => {
    e.preventDefault();
    const rentalData = {
      inchiriereCu: q1,
      colleagueCount: q1 === "withColleagues" ? colleagueCount : null,
      durata: q2,
      identityFiles,
      selectedColleagues,
    };
    setPreviewData(rentalData); // Set the preview data
  };

  const handleClosePreview = () => {
    setPreviewData(null); // Close the preview
  };

  // When the user confirms the request, build a FormData object and submit
  const handleConfirmSubmit = async () => {
    const formData = new FormData();
    const studentIds = [
      user.id,
      ...previewData.selectedColleagues.map((stud) => stud.id),
    ];

    studentIds.forEach((id) => {
      formData.append("StudentIds", id);
    });
    formData.append("ListingId", listingId || "");
    if (previewData.identityFiles) {
      Array.from(previewData.identityFiles).forEach((file) => {
        formData.append("StudentIdPhotos", file);
      });
    }
    const response = await ApiService.post("Listings/rent-contract", formData);
    console.log("Request created successfully:", response.data);
    onSubmit(formData);
    onClose();
  };

  const stud1 = `${user.firstName} ${user.lastName}` || "Student X";
  const stud2 = `${selectedColleagues?.[0]?.firstName} ${selectedColleagues?.[0]?.lastName}` || "Student Y";

  if (!isOpen) return null;

  return (
    <CompatibleStudentsProvider>
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>

          {previewData ? (
            <div className="preview-modal">
              <h4>Confirmare Solicitare Închiriere Apartament</h4>

              <div className="preview-content">
                <p>
                  <strong>Stimate Proprietar,</strong>
                </p>
                <p>
                  Subsemnații, <strong>{stud1}</strong> și{" "}
                  <strong>{stud2}</strong>, dorim să solicităm închirierea
                  apartamentului pe o perioadă de 1 an.
                </p>

                <p>
                  <strong>Detalii despre solicitare:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Durata închirierii:</strong>{" "}
                    {previewData.durata === "1an" ? "1 an" : "6 luni"}
                  </li>
                  <li>
                    <strong>Împreună cu colegi:</strong>{" "}
                    {previewData.inchiriereCu === "withFriend" ? "Da" : "Nu"}
                  </li>
                  {previewData.inchiriereCu === "withFriend" &&
                    previewData.colleagueCount && (
                      <li>
                        <strong>Număr colegi:</strong>{" "}
                        {previewData.colleagueCount}
                      </li>
                    )}
                </ul>

                  <div>
                    <p>
                      <strong>Documente încărcate:</strong>
                    </p>
                    <p>
                      Am încărcat poze cu cărțile de identitate pentru a
                      facilita finalizarea contractului de închiriere de la
                      ANAF.
                    </p>
                    <div className="image-previews">
                      {imagePreviews.map((preview, index) => (
                        <img
                          key={index}
                          src={preview}
                          alt={`Preview ${index}`}
                          className="preview-image"
                        />
                      ))}
                    </div>
                  </div>

                <div className="d-flex justify-content-between">
                  <button
                    className="homec-btn homec-btn__second"
                    onClick={handleClosePreview}
                  >
                    Modifică solicitarea
                  </button>
                  <button
                    className="homec-btn homec-btn__primary"
                    onClick={handleConfirmSubmit}
                  >
                    Trimite solicitarea
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <section className="pd-top-80 pd-btm-80">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <form onSubmit={handleRentalSubmit}>
                      <div className="homec-submit-form">
                        <h4 className="homec-submit-form__title">
                          Formular solicitare închiriere
                        </h4>
                        <div className="homec-submit-form__inner">
                          <div className="form-group">
                            <label>
                              1.    Dorești să închiriezi apartamentul împreună cu
                              un coleg?
                            </label>
                            <div>
                              <input
                                type="radio"
                                id="alone"
                                name="q1"
                                value="alone"
                                checked={q1 === "alone"}
                                onChange={() => setQ1("alone")}
                                style ={{marginRight: "10px"}}
                              />
                              <label htmlFor="alone">
                                   Nu, doresc să închiriez apartamentul singură
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="withFriend"
                                name="q1"
                                value="withFriend"
                                checked={q1 === "withFriend"}
                                onChange={() => setQ1("withFriend")}
                                style ={{marginRight: "10px"}}
                              />
                              <label htmlFor="withFriend">
                                Da, împreună cu colegul / colegii{" "}
                                <em>(folosește search-ul pentru colegi)</em>
                              </label>
                            </div>

                            {q1 === "withFriend" && (
                              <div className="sub-input">
                                <SearchColleagues
                                  onSelectedChange={
                                    handleSelectedColleaguesChange
                                  }
                                />
                              </div>
                            )}
                          </div>

                          <div className="form-group">
                            <label>
                              2. Care este durata pe care dorești să închiriezi
                              acest apartament?
                            </label>
                            <div>
                              <input
                                type="radio"
                                id="6luni"
                                name="q2"
                                value="6luni"
                                checked={q2 === "6luni"}
                                onChange={() => setQ2("6luni")}
                                style ={{marginRight: "10px"}}
                              />
                              <label htmlFor="6luni">6 luni</label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="1an"
                                name="q2"
                                value="1an"
                                checked={q2 === "1an"}
                                onChange={() => setQ2("1an")}
                                style ={{marginRight: "10px"}}
                              />
                              <label htmlFor="1an">1 an</label>
                            </div>
                          </div>

                          <div className="form-group">

                            <div className="sub-input">
                              <label>
                                Încarcă poze cu cartea ta de identitate si a
                                viitorilor colegi de apartament:
                              </label>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                              />
                              {imagePreviews.length > 0 && (
                                <div className="image-previews">
                                  {imagePreviews.map((preview, index) => (
                                    <img
                                      key={index}
                                      src={preview}
                                      alt={`Preview ${index}`}
                                      className="preview-image"
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-end mg-top-40">
                          <button
                            type="submit"
                            className="homec-btn homec-btn__second"
                          >
                            <span>Preview</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </CompatibleStudentsProvider>
  );
}

RentalRequestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RentalRequestModal;
