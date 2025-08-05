import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

function Notifications({ displayDrawer = false, notifications = [] }) {
  return (
    <>
      <div className="notifications-title">Your notifications</div>

      {displayDrawer && (
        <div className="notifications">
          <button
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none'
            }}>
            <img
              src={closeIcon}
              alt="close"
              style={{ height: '15px', width: '15px' }} />
          </button>

          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>
                Here is the list of notifications</p>
              <ul>
                {notifications.map((notif) => (
                  <NotificationItem key={notif.id} {...notif} />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Notifications