import React, { useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import { useNavigate } from 'react-router-dom';
import EmailTemplate from "../Form/EmailTemplate";
import { useTranslation } from "react-i18next";

const TableSecretary = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const showModal = (record) => {
    setSelectedFaculty(record);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log(`${t("delete_faculty")} ${selectedFaculty?.nameFaculty}`);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: t("faculty_name"),
      dataIndex: "nameFaculty",
      key: "nameFaculty",
      width: 300,
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("secretary"),
      dataIndex: "secretary",
      key: "secretary",
      width: 250,
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("email_secretary"),
      dataIndex: "email",
      key: "email",
      width: 170,
    },
    {
      title: t("send_email"),
      key: "sentEmail",
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <EmailTemplate record={record} />
        </Space>
      ),
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
              case "SENT":
                color = "green";
                break;
              case "SEND":
                color = "purple";
                break;
              case "IN PROGRESS":
                color = "blue";
                break;
              case "FAILED":
                color = "red";
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
      title: t("edit"),
      key: "edit",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <button
            type="button"
            className="edit-btn"
            onClick={() => navigate(`/edit-faculty/${record.key}`)}
          >
            <span>{t("edit")}</span> {/* Textul "Edit" pe buton */}
          </button>
        </Space>
      ),
    },
    {
      title: t("delete"),
      key: "delete",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <button
            type="button"
            className="delete-btn"
            onClick={() => showModal(record)}
          >
            <span>{t("delete")}</span> {/* Textul "Delete" pe buton */}
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      nameFaculty: "Faculty of Computer Science",
      secretary: "Laura Ionescu",
      email: "laura.ionescu@university.com",
      tags: ["SENT"],
    },
    {
      key: "2",
      nameFaculty: "Faculty of Medicine",
      secretary: "Alexandru Popescu",
      email: "alexandru.popescu@university.com",
      tags: ["IN PROGRESS"],
    },
    {
      key: "3",
      nameFaculty: "Faculty of Law",
      secretary: "Maria Georgescu",
      email: "maria.georgescu@university.com",
      tags: ["SEND"],
    },
    {
      key: "4",
      nameFaculty: "Faculty of Engineering",
      secretary: "Ion Marinescu",
      email: "ion.marinescu@university.com",
      tags: ["FAILED"],
    },
    {
      key: "5",
      nameFaculty: "Faculty of Business Administration",
      secretary: "Elena Dumitrescu",
      email: "elena.dumitrescu@university.com",
      tags: ["IN PROGRESS"],
    },
    {
      key: "6",
      nameFaculty: "Faculty of Arts",
      secretary: "Vasile Ionescu",
      email: "vasile.ionescu@university.com",
      tags: ["SENT"],
    },
  ];
  

  return (
    <div className="table-container">
      <Table
        columns={columns}
        dataSource={data}
        tableLayout="fixed"
        pagination={{ pageSize: 5 }}
        scroll={{ x: true }}
      />

      {/* Modal for Delete Confirmation */}
      <Modal
        title={t("confirm_delete")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={t("delete")}
        cancelText={t("cancel")}
      >
        <p>
          {t("are_you_sure_delete")} <strong>{selectedFaculty?.nameFaculty}</strong>?
        </p>
      </Modal>
    </div>
  );
};

export default TableSecretary;
