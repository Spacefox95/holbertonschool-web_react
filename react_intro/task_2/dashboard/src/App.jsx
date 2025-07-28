import "./App.css";
import Notifications from "./Notifications.jsx";
import logo from "./assets/holberton-logo.jpg";
import { getCurrentYear, getFooterCopy } from "./utils";

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1 style={{ color: "#e1003c" }}>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form>
          <label for="email">E-mail </label>
          <input type="email" id="email" name="email" />

          <label for="password">Password </label>
          <input type="password" id="password" name="password" />

          <button type="submit">OK</button>
        </form>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy(false)}
        </p>
      </div>
    </>
  );
}

export default App;
