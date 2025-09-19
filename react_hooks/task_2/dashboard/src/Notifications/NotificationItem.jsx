import { useRef, memo, useCallback } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
    cursor: "pointer",
  },
  urgent: {
    color: "red",
    cursor: "pointer",
  },
});

const NotificationItem = memo(function NotificationItem({
  id,
  type = "default",
  html,
  value,
  markAsRead,
}) {
  const liRef = useRef(null);
  const handleClick = useCallback(() => {
    if (markAsRead) {
      markAsRead(id);
    }
  }, [id, markAsRead]);

  const containsHTML = (str) => {
    typeof str === "string" && /<\/?[a-z][\s\S]*>/i.test(str);
  };
  const styleClass = type === "urgent" ? styles.urgent : styles.default;

  if (html) {
    return (
      <li
        ref={liRef}
        className={css(styleClass)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      />
    );
  }

  if (value && containsHTML(value)) {
    return (
      <li
        ref={liRef}
        className={css(styleClass)}
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: value }}
        onClick={handleClick}
      />
    );
  }

  return (
    <li
      ref={liRef}
      className={css(styleClass)}
      data-notification-type={type}
      onClick={handleClick}
    >
      {value}
    </li>
  );
});

export default NotificationItem;
