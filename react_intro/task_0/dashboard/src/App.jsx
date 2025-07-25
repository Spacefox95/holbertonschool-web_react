import "./App.css";
import logo from './assets/holberton-logo.jpg';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1 style={{ color: "#e1003c" }}>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright 2025 - holberton School</p>
      </div>
    </>
  );
}

export default App;
