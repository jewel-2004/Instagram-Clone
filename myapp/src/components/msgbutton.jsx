// MessageButton.js
import React, { useState } from "react";
import "./msgbutton.css";
import { RiMessengerLine } from "react-icons/ri";
import { FaPen } from "react-icons/fa"; // compose icon
import { IoMdClose } from "react-icons/io";

function MessageButton() {
  const [open, setOpen] = useState(false);

  const messages = [
    {
      id: 1,
      name: "athulya",
      lastMsg: "You: Hello",
      time: "5w",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 2,
      name: "ane_esh_a 🌻",
      lastMsg: "Hii",
      time: "9w",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      unread: true,
    },
    {
      id: 3,
      name: "Akash s",
      lastMsg: "You: Okk daa",
      time: "19w",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className="message-btn-container">
      {/* Button */}
      <div className="message-btn" onClick={() => setOpen(!open)}>
        <div className="icon-wrapper">
          <RiMessengerLine className="messenger-icon" />
          <span className="badge">1</span>
        </div>
        <span className="text">Messages</span>
        <img
          className="profile"
          src="https://randomuser.me/api/portraits/women/28.jpg"
          alt="profile"
        />
      </div>

      {/* Messages Panel */}
      {open && (
        <div className="messages-panel">
          <div className="panel-header">
            <span>Messages</span>
            <span className="notif">1</span>
            <IoMdClose className="close-btn" onClick={() => setOpen(false)} />
          </div>

          <div className="message-list">
            {messages.map((msg) => (
              <div key={msg.id} className="message-item">
                <img src={msg.avatar} alt={msg.name} className="avatar" />
                <div className="msg-info">
                  <p className="name">{msg.name}</p>
                  <p className="last-msg">{msg.lastMsg}</p>
                </div>
                <span className="time">{msg.time}</span>
                {msg.unread && <span className="dot"></span>}
              </div>
            ))}
          </div>

          <div className="compose">
            <FaPen className="compose-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageButton;
