import "./Notifications.css";
import React from "react";
import closeIcon from "./assets/close-button.png";
import { getLatestNotification } from "../utils";

const Notifications = () => {
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
        <img
          src={closeIcon}
          alt="close"
          style={{ height: "15px", width: "15px" }}
        />
      </button>
      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
