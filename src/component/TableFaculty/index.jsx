import React, { useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import { useNavigate } from 'react-router-dom';
import EmailTemplate from "../Form/EmailTemplate";
import { useTranslation } from "react-i18next";

const TableSecretary = () => {
  const { t } = useTranslation(); // Hook pentru traducere
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
      width: 150,
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("secretary"),
      dataIndex: "secretary",
      key: "secretary",
      width: 200,
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
            className="homec-btn homec-btn__second"
            onClick={() => navigate(`/edit-faculty/${record.key}`)}
          >
            <span>{t("edit")}</span>
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
            className="homec-btn homec-btn-delete"
            onClick={() => showModal(record)}
          >
            <span>{t("delete")}</span>
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      nameFaculty: "Engineering",
      secretary: "John Brown",
      email: "john@gmail.com",
      tags: ["SENT"],
    },
    {
      key: "2",
      nameFaculty: "Medicine",
      secretary: "Aa Bb",
      email: "a@gmail.com",
      tags: ["IN PROGRESS"],
    },
    {
      key: "3",
      nameFaculty: "Physics",
      secretary: "Cc Dd",
      email: "c@gmail.com",
      tags: ["SEND"],
    },
    {
      key: "4",
      nameFaculty: "Chemistry",
      secretary: "Dd Ee",
      email: "d@gmail.com",
      tags: ["FAILED"],
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} tableLayout="fixed" />

      {/* Modal pentru confirmare ștergere */}
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
    </>
  );
};

export default TableSecretary;