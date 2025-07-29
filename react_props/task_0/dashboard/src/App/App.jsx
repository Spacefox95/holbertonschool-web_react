import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications />
      </div>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
