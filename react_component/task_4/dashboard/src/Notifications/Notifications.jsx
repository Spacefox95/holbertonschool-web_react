import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import { Component } from "react";

class Notifications extends Component {
  static defaultProps = {
    notifications: [],
  };

  handleClick = () => {
    console.log("Close button has been clicked");
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications } = this.props;


    return (
      <div className="notifications">
        <button
          style={{ position: "absolute", top: "10px", right: "10px" }}
          aria-label="Close"
          onClick={this.handleClick}
        >
          <img src={closeIcon} alt="close" style={{ height: "15px", width: "15px" }} />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.map((notif) => (
            <NotificationItem key={notif.id} type={notif.type} value={notif.value} html={notif.html} markAsRead={this.markAsRead} />
          ))}
        </ul>
      </div>
    );
  };
}

export default Notifications;
