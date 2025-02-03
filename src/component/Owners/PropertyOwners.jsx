import PropTypes from "prop-types";
import { useState } from "react";
import SearchColleagues from "../Form/SearchColleagues";
import RentalRequestModal from "./RentalRequestModal";  // Importă componenta RentalRequestModal

function PropertyOwners({ image, name, position }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Bună! Cum te pot ajuta?", avatar: image }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "user", text: inputMessage, avatar: "/img/user-avatar.png" }
      ]);
      setInputMessage("");
    }
  };

  const handleRentalSubmit = (rentalData) => {
    console.log("Date formular închiriere:", rentalData);
    // Aici se poate face trimiterea datelor printr-un API call
  };

  return (
    <div className="col-lg-4 col-12">
      {/* Cardul agentului imobiliar */}
      <div
        className="homec-property-ag homec-property-ag--side homec-bg-cover"
        style={{ backgroundImage: "url('/img/property-ag-bg.svg')" }}
      >
        <h3 className="homec-property-ag__title">Property Agent</h3>
        <div className="homec-property-ag__author">
          <div className="homec-property-ag__author--img">
            <img src={image} alt="Agent" />
          </div>
          <div className="homec-property-ag__author--content">
            <h4 className="homec-property-ag__author--title">
              {name}
              <span>{position}</span>
            </h4>
          </div>
        </div>
        <form action="#" className="homec-property-ag__form">
        <button
          type="button"
          className="homec-btn homec-btn__thrid homec-property-ag__button"
          onClick={() => setIsModalOpen(true)}
        >
          <span>Solicită închiriere</span>
        </button>

          <button
            type="button"
            className="homec-btn homec-btn__second homec-property-ag__button"
            onClick={() => setIsChatOpen(true)}
          >
            <span>Send Message Now</span>
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

      {/* Modalul pentru solicitarea închiriierii */}
      <RentalRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRentalSubmit}
      />
    </div>
  );
}

PropertyOwners.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default PropertyOwners;
