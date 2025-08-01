import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

const Notifications = ({ notifications = [] }) => {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="notifications">
      <button
        style={{ position: "absolute", top: "10px", right: "10px" }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="close" style={{ height: "15px", width: "15px" }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map(({ id, type, value, html }) => (
          <NotificationItem key={id} type={type} value={value} html={html} />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
