import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
