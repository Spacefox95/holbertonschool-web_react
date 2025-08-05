import { useRef } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const emailRef = useRef(null);
  const passwrdRef = useRef(null);

  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>

      <form>
        <label
          htmlFor="email"
          onClick={() => emailRef.current && emailRef.current.focus()}
        >
          Email:
        </label>

        <input
          className={css(styles.input)}
          type="email"
          id="email"
          name="email"
        />

        <label
          htmlFor="password"
          onClick={() => passwrdRef.current && passwrdRef.current.focus()}
        >
          Password:{" "}
        </label>
        <input
          className={css(styles.input)}
          type="password"
          id="password"
          name="password"
        />

        <button type="submit">OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: "100px",
    textAlign: "center",
  },
  input: {
    margin: "0 5px",
  },
});

export default Login;
