function ImageInput({ uploadedImg, handleDelete, handleImage }) {
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleImage(Array.from(files)); // Convert FileList to an array
    }
  };

  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Property Image</h4>
      <div className="homec-submit-form__inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <div className="homec-submit-form__upload mg-btm-10">
                <p className="homec-img-video-label">
                  Slider Image* <span>(Max. limit 10 & Max. Size 10MB)</span>
                </p>
                <div className="homec-submit-form__upload-btn">
                  <label className="homec-btn homec-btn--upload">
                    <span>Upload New Image</span>
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

