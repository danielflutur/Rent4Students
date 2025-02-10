function ImageInput({ uploadedImg, handleDelete, handleImage }) {
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleImage(Array.from(files)); // Convert FileList to an array
    }
  };

  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Imaginile Proprietății</h4>
      <div className="homec-submit-form__inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <div className="homec-submit-form__upload mg-btm-10">
                <p className="homec-img-video-label">
                  Lista Imagini* <span>(Max. limit 10 & Max. Size 10MB)</span>
                </p>
                <div className="homec-submit-form__upload-btn">
                  
                <label
                    style={{
                      background: "#7166f0",
                      color: "#fff",
                      fontWeight: 500,
                      padding: "0 30px",
                      border: "1px solid transparent",
                      borderRadius: "4px",
                      display: "flex",
                      gap: "10px",
                      transition: "all 0.5s ease",
                      maxWidth: "fit-content",
                      cursor: "pointer",
                      height: "60px",
                      fontSize: "18px",
                      zIndex: 2,
                      overflow: "hidden",
                      textAlign: "center",
                      lineHeight: "60px"
                    }}
                  >
                    <span>Incarca imagine</span>
                    <input
                      type="file"
                      multiple
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              <div className="homec-upload-images">
                <div className="row">
                  {uploadedImg?.map((photo) => (
                    <div key={photo.id} className="col-md-4">
                      <img
                        src={photo.img}
                        alt="Uploaded"
                        className="img-thumbnail"
                      />
                      <button
                        onClick={() => handleDelete(photo.id)}
                        className="btn btn-danger btn-sm mt-2"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageInput;

