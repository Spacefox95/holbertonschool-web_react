import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import { Component, Fragment } from "react";
import CourseList from "../CourseList/CourseList.jsx";

class App extends Component {
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => { }
  };

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componenetWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }



  render() {
    const { isLoggedIn } = this.props;

    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
    ];

    const courseList = []

    return (
      <Fragment>
        <Notifications notifications={notificationsList} />
        <Header />
        {isLoggedIn ? (
          <CourseList courses={courseList} />
        ) : (
          <Login />
        )}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
