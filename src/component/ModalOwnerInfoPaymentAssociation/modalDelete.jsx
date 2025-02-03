import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";

function ModalDelete({ isModalOpen, toggleModal }) {
  const handleOk = () => {
    toggleModal(false); // Închidem modalul folosind funcția din props
  };

  const handleCancel = () => {
    toggleModal(false); // La fel pentru anulare
  };

  return (
    <>
      <Button type="primary" onClick={() => toggleModal(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

ModalDelete.propTypes = {
  isModalOpen: PropTypes.bool.isRequired, // Corectare: PropTypes, nu ProtoTypes
  toggleModal: PropTypes.func.isRequired,
};

export default ModalDelete;
