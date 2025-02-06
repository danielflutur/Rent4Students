import ProtoTypes from "prop-types";
import { useEffect, useState } from "react";
import { useUser } from "../../context/AuthDetailsProvider";
import ApiService from "../../services/ApiService";

function StudentProfile({roommateId}) {
  const { user } = useUser();
  const profilePicture = user?.profilePhoto || "/img/user-icon.png";
  const displayName = user?.firstName || "No data";
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Bună! Cum te pot ajuta?", avatar: profilePicture }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "user", text: inputMessage, avatar: user?.profilePhoto }
      ]);
      setInputMessage("");
    }
  };

  const handleAddRoommate = async () => {
    const data = {
      studentId: user.id,
      roommateId: roommateId
    }
    const response = await ApiService.post("Students/add-roommate", data);
    console.log(response);
  }

  return (
    <div className="col-lg-4">
      <div
        className="homec-property-ag homec-property-ag--side homec-bg-cover"
        style={{ backgroundImage: "url('/img/property-ag-bg.svg')" }}
      >
        <h3 className="homec-property-ag__title">Student</h3>
        <div className="homec-property-ag__author">
          <div className="homec-property-ag__author--img">
            <img src={profilePicture} alt="#" />
          </div>
          <div className="homec-property-ag__author--content">
            <h4 className="homec-property-ag__author--title">
              {displayName}
            </h4>
          </div>
        </div>
        <form action="#" className="homec-property-ag__form">
          <button
            type="button"
            className="homec-btn homec-btn__thrid homec-property-ag__button"
            onClick={handleAddRoommate}
          >
            <span>Adaugă coleg</span>
          </button>

          <button
            type="button"
            className="homec-btn homec-btn__second homec-property-ag__button"
            onClick={() => setIsChatOpen(true)}
          >
            <span>Lasă un mesaj</span>
          </button>
        </form>

      </div>
      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Chat Rent4Students</h4>
            <button className="chat-close-btn" onClick={() => setIsChatOpen(false)}>
              ✖
            </button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <img src={msg.avatar} alt="Avatar" className="chat-avatar" />
                <p className="chat-text">{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Scrie un mesaj..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Trimite</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;
