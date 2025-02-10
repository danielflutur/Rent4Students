import React, { useState, useEffect } from "react";
import { Tag, Table, Modal, Upload, Button, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";
import { Document, Page } from "react-pdf"; // Import react-pdf components
import { useAuth } from "../../context/AuthProvider";
import ApiService from "../../services/ApiService";
import Preloader from "../Loader";

const TableManageStudentsApplications = () => {
  const { t } = useTranslation();
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false); // Separate state for preview modal
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false); // Separate state for status modal
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [status, setStatus] = useState(""); // For storing the selected status
  
  const { auth } = useAuth();
  const [students, setStudents] = useState();
  const [isLoading, setisLoadingg] = useState(true);

  useEffect(() => {
    if (auth) {
      ApiService.get(`FinancialHelpDocument/faculty/${auth?.id}`)
        .then((response) => {
          setStudents(response.data);
          console.log(response.data);
          setisLoadingg(false);
        })
        .catch((error) =>
          console.error("Error fetching faculties details:", error)
        );
    }
  }, []);

  const realData = students?.map((student) => ({
    key: student?.documentDetails.id,
    firstName: student?.studentDetails.firstName,
    lastName: student?.studentDetails.lastName,
    email: student?.studentDetails.email,
    document: student?.documentDetails.storageURL,
    tags: student?.documentDetails.documentStatusId === 1 ? ["APROBAT"] : student?.documentDetails.documentStatusId === 2 ? ["RESPINS"] : ["IN ASTEPTARE"]
  }));

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
    setIsPreviewModalOpen(false); // Close preview modal
    setIsStatusModalOpen(false); // Close status modal
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value); // Update the status based on selected radio button
  };

  const handleSubmitStatus = () => {
    // Map the status string to the numerical code
    const statusCode = status === "Approved" ? 1 : status === "Rejected" ? 2 : null;
    if (!statusCode) {
      console.error("Invalid status selected.");
      return;
    }

  // Call your API service to update the status
  ApiService.put(`FinancialHelpDocument?documentId=${selectedStudent.key}&documentStatus=${statusCode}`) // Replace "your-endpoint" with the actual API route
    .then((response) => {
      console.log("Status updated successfully", response);
      ApiService.get(`FinancialHelpDocument/faculty/${auth?.id}`)
        .then((response) => {
          setStudents(response.data);
          console.log(response.data);
          setisLoadingg(false);
        })
        .catch((error) =>
          console.error("Error fetching faculties details:", error)
        );
    })
    .catch((error) => {
      console.error("Error updating status:", error);
    });

  // Close the status modal once the request is sent
  setIsStatusModalOpen(false);
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
      title: t("status"),
      key: "tags",
      dataIndex: "tags",
      width: 100,
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            switch (tag.toUpperCase()) {
              case "APROBAT":
                color = "green";
                break;
              case "RESPINS":
                color = "red";
                break;
                
              case "IN ASTEPTARE":
                color = "orange";
                break;
              default:
                color = "default";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
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
            <embed
            src={selectedStudent?.document}
            type="application/pdf"
            width="100%"
            height="800px"
          />
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
  }
  return component;
};

export default TableManageStudentsApplications;
