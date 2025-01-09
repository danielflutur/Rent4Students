import React, { useState } from "react";  // Add useState import from React
import { Space, Table, Tag, Modal } from "antd";
import { useNavigate } from 'react-router-dom';  // For navigation

const TableSecretary = () => {
  const navigate = useNavigate();  // Hook for navigation
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const showModal = (record) => {
    setSelectedFaculty(record);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log(`Șterge facultatea: ${selectedFaculty?.nameFaculty}`);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Nume Facultate",
      dataIndex: "nameFaculty",
      key: "nameFaculty",
      width: 150,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Secretar",
      dataIndex: "secretary",
      key: "secretary",
      width: 200,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 170,
    },
    {
      title: "Trimite email",
      key: "sentEmail",
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <button type="submit" className="homec-btn">
            <span>Trimite Email</span>
          </button>
        </Space>
      ),
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      width: 100,
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            switch (tag.toUpperCase()) {
              case "TRIMIS":
                color = "green";
                break;
              case "TRIMITE":
                color = "purple";
                break;
              case "ÎN PROGRES":
                color = "blue";
                break;
              case "EȘUAT":
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
      title: "Editează",
      key: "edit",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <button
            type="button"
            className="homec-btn homec-btn__second"
            onClick={() => navigate(`/edit-faculty/${record.key}`)}  // Navigate with faculty ID
          >
            <span>Editează</span>
          </button>
        </Space>
      ),
    },
    {
      title: "Șterge",
      key: "delete",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <button
            type="button"
            className="homec-btn homec-btn-delete"
            onClick={() => showModal(record)}
          >
            <span>Șterge</span>
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      nameFaculty: "Inginerie",
      secretary: "John Brown",
      email: "john@gmail.com",
      tags: ["TRIMIS"],
    },
    {
      key: "2",
      nameFaculty: "Medicina",
      secretary: "Aa Bb",
      email: "a@gmail.com",
      tags: ["ÎN PROGRES"],
    },
    {
      key: "3",
      nameFaculty: "Fizica",
      secretary: "Cc Dd",
      email: "c@gmail.com",
      tags: ["TRIMITE"],
    },
    {
      key: "4",
      nameFaculty: "Chimie",
      secretary: "Dd Ee",
      email: "d@gmail.com",
      tags: ["EȘUAT"],
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} tableLayout="fixed" />

      {/* Modal pentru confirmare ștergere */}
      <Modal
        title="Confirmare Ștergere"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Șterge"
        cancelText="Anulează"
      >
        <p>
          Sunteți sigur că doriți să ștergeți facultatea{" "}
          <strong>{selectedFaculty?.nameFaculty}</strong>?
        </p>
      </Modal>
    </>
  );
};

export default TableSecretary;
