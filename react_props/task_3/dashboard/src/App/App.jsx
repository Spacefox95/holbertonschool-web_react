import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import { Fragment } from "react";

function App() {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
  ];

  return (
    <Fragment>
      <Notifications notifications={notificationsList} />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
