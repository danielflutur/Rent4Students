import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import RentalRequestModal from "./RentalRequestModal"; // Importă componenta RentalRequestModal
import { useUser } from "../../context/AuthDetailsProvider";
import ApiService from "../../services/ApiService";

function PropertyOwners({ image, name, position, ownerId, listingId }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useUser();
  const [owner, setOwner] = useState();
  const [profilePhoto , setPhoto] = useState();
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Bună! Cum te pot ajuta?", avatar: profilePhoto },
  ]);
  
  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "user", text: inputMessage, avatar: user?.profilePhoto },
      ]);
      setInputMessage("");
    }
  };

  const handleRentalSubmit = (rentalData) => {
    console.log("Date formular închiriere:", rentalData);
  };

  useEffect(() => {
    if (profilePhoto) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.sender === "agent" ? { ...msg, avatar: profilePhoto } : msg
        )
      );
    }
  }, [profilePhoto]);
  

  useEffect(() => {
    ApiService.get(`PropertyOwners/${ownerId}`)
      .then((response) => {
        setOwner(response.data);
        setPhoto(response.data.profilePhoto)
        
      })
      .catch((error) => console.error("Error fetching owner details:", error));
  }, []);

  return (
    <div className="col-lg-4 col-12">
      <div
        className="homec-property-ag homec-property-ag--side homec-bg-cover"
        style={{ backgroundImage: "url('/img/property-ag-bg.svg')" }}
      >
        <h3 className="homec-property-ag__title">Proprietar</h3>
        <div className="homec-property-ag__author">
          <div className="homec-property-ag__author--img">
            <img src={owner?.profilePhoto} alt="Agent" />
          </div>
          <div className="homec-property-ag__author--content">
            <h4 className="homec-property-ag__author--title">
              {`${owner?.firstName} ${owner?.lastName}`}
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
            <span>Lasă un mesaj</span>
          </button>
        </form>
      </div>

      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Chat Rent4Students</h4>
            <button
              className="chat-close-btn"
              onClick={() => setIsChatOpen(false)}
            >
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
        listingId={listingId}
      />
    </div>
  );
}

export default PropertyOwners;
