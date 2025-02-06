import React, { useState } from "react";
import { Space, Table, Modal, Upload, Button, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";
import { Document, Page } from "react-pdf"; // Import react-pdf components

const TableManageStudentsApplications = () => {
  const { t } = useTranslation();
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false); // Separate state for preview modal
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);   // Separate state for status modal
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [status, setStatus] = useState(""); // For storing the selected status
  const [realData, setRealData] = useState([
    {
      key: "1",
      firstName: "Ion",
      lastName: "Ionescu",
      email: "ion.ionescu@example.com",
      document: "https://fiesc.usv.ro/wp-content/uploads/sites/17/2024/09/Informatii-subventie-sept.pdf", // Example URL for PDF
      status: "Pending",
    },
  ]);

  // Handle opening of preview modal
  const showPreviewModal = (record) => {
    setSelectedStudent(record);
    setIsPreviewModalOpen(true);
  };

  // Handle opening of status modal
  const showStatusModal = (record) => {
    setSelectedStudent(record);
    setIsStatusModalOpen(true);
  };

  // Handle closing of modals
  const handleCancel = () => {
    setIsPreviewModalOpen(false);  // Close preview modal
    setIsStatusModalOpen(false);   // Close status modal
  };

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const formattedData = jsonData.map((row, index) => ({
        key: index.toString(),
        firstName: row["First Name"],
        lastName: row["Last Name"],
        email: row["Email"],
        document: row["Document"] || "N/A", // Assume URL or path in Excel
        status: "Pending",
      }));
      setRealData(formattedData);
    };
    reader.readAsArrayBuffer(file);
    return false;
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value); // Update the status based on selected radio button
  };

  const handleSubmitStatus = () => {
    setRealData((prevData) =>
      prevData.map((student) =>
        student.key === selectedStudent.key ? { ...student, status } : student
      )
    );
    setIsStatusModalOpen(false); // Close status modal after submitting
  };

  const columns = [
    {
      title: t("manageapplications.first_name"),
      dataIndex: "firstName",
      key: "firstName",
      width: 200,
    },
    {
      title: t("manageapplications.last_name"),
      dataIndex: "lastName",
      key: "lastName",
      width: 200,
    },
    {
      title: t("manageapplications.email"),
      dataIndex: "email",
      key: "email",
      width: 250,
    },
    {
      title: t("manageapplications.access_document"),
      key: "access_document",
      width: 150,
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => showPreviewModal(record)} // Open preview modal
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            padding: "10px 20px",
            fontWeight: "bold",
            border: "none",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          {t("manageapplications.access_document")}
        </Button>
      ),
    },
    {
      title: t("manageapplications.set_status"),
      key: "setStatus",
      width: 200,
      render: (_, record) => (
        <Button type="primary" onClick={() => showStatusModal(record)}>
          {t("manageapplications.set_status")}
        </Button>
      ),
    },
  ];

  return (
    <div className="table-container">
      <Table
        columns={columns}
        dataSource={realData}
        tableLayout="fixed"
        pagination={{ pageSize: 5 }}
        scroll={{ x: true }}
      />

      {/* Modal for displaying PDF */}
      <Modal
        title={t("manageapplications.document_preview")}
        open={isPreviewModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {selectedStudent?.document && (
          <Document
            file={selectedStudent.document} // Use dynamic document URL or path
            onLoadError={(error) => console.error("Error loading PDF:", error)}
            loading={<div>Loading PDF...</div>} // Show loading message
          >
            <Page pageNumber={1} width={600} /> {/* Show first page of PDF */}
          </Document>
        )}
      </Modal>

      {/* Modal for setting status */}
      <Modal
        title={t("manageapplications.set_status_for_documents")}
        open={isStatusModalOpen}
        onCancel={handleCancel}
        onOk={handleSubmitStatus}
        okText={t("manageapplications.submit")}
        cancelText={t("manageapplications.cancel")}
      >
        <p>{t("manageapplications.choose_status_for_the_document")}</p>
        <Radio.Group
          onChange={handleStatusChange}
          value={status}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Radio value="Approved">{t("manageapplications.approved")}</Radio>
          <Radio value="Rejected">{t("manageapplications.rejected")}</Radio>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default TableManageStudentsApplications;
