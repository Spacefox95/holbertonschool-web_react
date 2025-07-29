import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <form>
        <label
          htmlFor="email"
          onClick={() => document.getElementById("email")?.focus()}
        >
          Email:
        </label>

        <input type="email" id="email" name="email" />

        <label
          htmlFor="password"
          onClick={() => document.getElementById("password")?.focus()}
        >
          Password:{" "}
        </label>
        <input type="password" id="password" name="password" />

        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default Login;
