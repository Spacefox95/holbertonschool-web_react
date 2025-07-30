import { useRef } from "react";
import "./Login.css";

function Login() {
  const emailRef = useRef(null);
  const passwrdRef = useRef(null);

  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <form>
        <label
          htmlFor="email"
          onClick={() => emailRef.current && emailRef.current.focus()}
        >
          Email:
        </label>

        <input type="email" id="email" name="email" />

        <label
          htmlFor="password"
          onClick={() => passwrdRef.current && passwrdRef.current.focus()}
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
