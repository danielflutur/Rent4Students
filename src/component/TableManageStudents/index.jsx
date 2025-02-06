import React, { useState } from "react";
import { Space, Table, Modal, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";

const TableManageStudents = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [realData, setRealData] = useState([
    {
      key: "1",
      firstName: "Ion",
      lastName: "Ionescu",
      email: "ion.ionescu@example.com",
      studentId: "123456",
    },
  ]);

  const showModal = (record) => {
    setSelectedStudent(record);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        studentId: row["Student ID"],
      }));
      setRealData(formattedData);
    };
    reader.readAsArrayBuffer(file);
    return false;
  };

  const columns = [
    {
      title: t("first_name"),
      dataIndex: "firstName",
      key: "firstName",
      width: 200,
    },
    {
      title: t("last_name"),
      dataIndex: "lastName",
      key: "lastName",
      width: 200,
    },
    {
      title: t("email"),
      dataIndex: "email",
      key: "email",
      width: 250,
    },
    {
      title: t("student_id"),
      dataIndex: "studentId",
      key: "studentId",
      width: 150,
    },
    {
      title: t("edit"),
      key: "edit",
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <button
            type="button"
            className="edit-btn"
            onClick={() => navigate(`/edit-student/${record.key}`, { state: record })}
          >
            <span>{t("edit")}</span>
          </button>
        </Space>
      ),
    },
    {
      title: t("delete"),
      key: "delete",
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <button
            type="button"
            className="delete-btn"
            onClick={() => showModal(record)}
          >
            <span>{t("delete")}</span>
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="table-container">
      <div style={{ marginBottom: "20px" }}>
        <Upload beforeUpload={handleFileUpload} showUploadList={false}>
          <Button
            icon={<UploadOutlined />}
            style={{ backgroundColor: "#7166F0", color: "#fff", border: "none", borderRadius: "5px", padding: "10px 20px", fontWeight: "bold" }}
          >
            {t("upload_excel")}
          </Button>
        </Upload>
      </div>

      <Table
        columns={columns}
        dataSource={realData}
        tableLayout="fixed"
        pagination={{ pageSize: 5 }}
        scroll={{ x: true }}
      />

      <Modal
        title={t("confirm_delete")}
        open={isModalOpen}
        onCancel={handleCancel}
        okText={t("delete")}
        cancelText={t("cancel")}
      >
        <p>
          {t("are_you_sure_delete")} <strong>{selectedStudent?.firstName} {selectedStudent?.lastName}</strong>?
        </p>
      </Modal>
    </div>
  );
};

export default TableManageStudents;
