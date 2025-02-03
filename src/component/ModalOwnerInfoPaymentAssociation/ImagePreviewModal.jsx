import PropTypes from "prop-types";
import React from "react";

const ImagePreviewModal = ({ previewImage, onClose }) => {
  return (
    <div className="image-preview-modal">
      <div className="preview-container">
        <button className="close-button" onClick={onClose} aria-label="Close Preview">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.7A1 1 0 105.7 7.12L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z" />
          </svg>
        </button>
        <img src={previewImage} alt="Preview" className="preview-image-big" />
      </div>
    </div>
  );
};

ImagePreviewModal.propTypes = {
  previewImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagePreviewModal;
