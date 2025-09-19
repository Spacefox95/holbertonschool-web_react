import React, { useState, useCallback, useMemo } from "react";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import axios from "axios";

import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import WithLogging from "../HOC/WithLogging";
import { getLatestNotification } from "../utils/utils";
import { newContext, defaultUser } from "../Context/context";
import { useEffect } from "react";

const LoginWithLogging = WithLogging(Login);
const CourseListWithLogging = WithLogging(CourseList);

const styles = StyleSheet.create({
  reset: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      scrollBehavior: "smooth",
    },
    "*::before": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    "*::after": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
  },
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    flex: 1,
    padding: "20px",
  },
  footer: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: "0.8rem",
    fontWeight: 200,
    fontStyle: "italic",
    borderTop: "0.25rem solid #e1003c",
  },
});

const App = () => {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState({ ...defaultUser });
  const [notifications, setNotifications] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `/holbertonschool-web_react/notifications.json`
        );
        const data = response.data || [];
        const updated = data.map((item) =>
          item.html?.__html === "LATEST"
            ? { ...item, html: { __html: getLatestNotification() } }
            : item
        );
        setNotifications(updated);
      } catch (error) {
        console.error("Failed to fecth notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (user.isLoggedIn) {
          const response = await axios.get(
            `/holbertonschool-web_react/courses.json`
          );
          const data = Array.isArray(response.data)
            ? response.data
            : response.data.courses || [];
          setCourses(data);
        } else {
          setCourses([]);
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchCourses();
  }, [user]);

  const logIn = useCallback((email, password) => {
    const newUser = {
      email: email || "",
      password: password || "",
      isLoggedIn: true,
    };
    setUser(newUser);
  }, []);

  const logOut = useCallback(() => {
    setUser({ ...defaultUser });
  }, []);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      logOut,
    }),
    [user, logOut]
  );

  return (
    <newContext.Provider value={contextValue}>
      <div className={css(styles.app)}>
        <Notifications
          notifications={notifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />

        <Header />

        <div className={css(styles.body)}>
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseListWithLogging courses={courses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <LoginWithLogging
                logIn={logIn}
                email={user.email}
                password={user.password}
              />
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
        </div>

        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </div>
    </newContext.Provider>
  );
};

export default App;
