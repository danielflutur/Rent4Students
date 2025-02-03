import React, { useContext, useEffect, useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import EmailTemplate from "../Form/EmailTemplate";
import { useTranslation } from "react-i18next";
import Preloader from "../Loader";
import { useAuth } from "../../context/AuthProvider";
import ApiService from "../../services/ApiService";

const TableSecretary = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [faculties, setFaculties] = useState([]);
  const [isLoading, setisLoadingg] = useState(true);
  const { auth } = useAuth();

  const showModal = (record) => {
    setSelectedFaculty(record);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const response = await ApiService.delete(
        `Faculties/${selectedFaculty.key}`
      );
      if (response) {
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(
        "Error deleteing faculty:",
        error.response?.data || error.message
      );
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEmailSending = async (record) => {
    try {
      const response = await ApiService.get(
        `Faculties/sendEmail/${record.key}`
      );
      if (response) {
        const anotherResponse = await ApiService.get(
          `Faculties/allByUniversity/${auth?.id}`
        );
        setFaculties(anotherResponse.data);
      }
    } catch (error) {
      console.error(
        "Error updating faculty:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    if (auth) {
      ApiService.get(`Faculties/allByUniversity/${auth?.id}`)
        .then((response) => {
          setFaculties(response.data);
          setisLoadingg(false);
        })
        .catch((error) =>
          console.error("Error fetching faculties details:", error)
        );
    }
  }, []);

  const columns = [
    {
      title: t("faculty_name"),
      dataIndex: "name",
      key: "name",
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
          <button
            type="button"
            className="homec-btn"
            onClick={() => handleEmailSending(record)}
          >
            <span>{t("send_email_button")}</span> {/* Textul "Edit" pe buton */}
          </button>
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
              case "NOT SENT":
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
            onClick={() =>
              navigate(`/edit-faculty/${record.key}`, { state: record })
            }
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

  const realData = faculties.map((faculty) => ({
    key: faculty.id,
    name: faculty.name,
    secretary: faculty.secretaryName,
    email: faculty.email,
    tags: faculty.emailSent ? ["SENT"] : ["NOT SENT"],
  }));

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
            {t("are_you_sure_delete")} <strong>{selectedFaculty?.name}</strong>?
          </p>
        </Modal>
      </div>
    );
  }
  return component;
};

export default TableSecretary;
