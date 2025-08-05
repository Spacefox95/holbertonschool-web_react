import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-button.png";

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  render() {
    const { notifications = [], displayDrawer = true } = this.props;
    let drawerContent = null;

    if (displayDrawer) {
      let content = "No new notification for now";

      if (notifications.length > 0) {
        const items = notifications.map((notification) => {
          // Séparer la key des autres props
          const itemProps = {
            id: notification.id,
            type: notification.type,
            markAsRead: this.markAsRead,
          };

          if (notification.html) {
            return (
              <NotificationItem
                key={notification.id} // key séparée
                {...itemProps}
                html={notification.html}
              />
            );
          }

          return (
            <NotificationItem
              key={notification.id} // key séparée
              {...itemProps}
              value={notification.value}
            />
          );
        });

        content = (
          <>
            <p>Here is the list of notifications</p>
            <ul>{items}</ul>
          </>
        );
      }

      drawerContent = (
        <div className={css(styles.notifications)}>
          <button
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img
              src={closeButton}
              alt="close"
              style={{ width: "15px", height: "15px" }}
            />
          </button>
          {content}
        </div>
      );
    }

    return (
      <div className={css(styles.rootNotifications)}>
        <div className={css(styles.notificationContainer)}>
          <div className={css(styles.title)}>Your notifications</div>
          {drawerContent}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  rootNotifications: {
    position: "relative",
  },
  notificationContainer: {},
  title: {
    fontWeight: "bold",
  },
  notifications: {
    display: "flex",
    flexDirection: "column",
    border: "2px dotted #e1003c",
    paddingLeft: "15px",
    height: "150px",
    '@media (max-width: 900px)': {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      padding: 0,
      fontSize: "20px",
      backgroundColor: "white",
      zIndex: 9999,
    },

    'li[data-priority="default"]': {
      color: "blue",
    },
    'li[data-priority="urgent"]': {
      color: "#e1003c !important",
    },
  },
});

export default Notifications;
