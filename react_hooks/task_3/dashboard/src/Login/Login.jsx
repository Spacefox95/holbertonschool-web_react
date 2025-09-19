import { useState } from "react";
import { StyleSheet, css } from "aphrodite";

const Login = ({ logIn, email: initialEmail = "", password: initialPassword = "" }) => {
  const [formData, setFormData] = useState({
    email: initialEmail,
    password: initialPassword
  });
  const [enableSubmit, setEnableSubmit] = useState(false);

  const validateForm = (email, password) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 8;
    setEnableSubmit(emailValid && passwordValid)
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(formData.email, formData.password)
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setFormData((prev) => {
      const updated = { ...prev, email };
      validateForm(updated.email, updated.password)
      return updated
    })
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setFormData((prev) => {
      const updated = { ...prev, password };
      validateForm(updated.email, updated.password)
      return updated
    })
  };

  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>

      <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          className={css(styles.input)}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChangeEmail}
        />

        <label htmlFor="password">Password:</label>
        <input
          className={css(styles.input)}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChangePassword}
        />

        <input
          type="submit"
          value="OK"
          disabled={!enableSubmit}
          className={css(styles.submit)}
        />
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  body: { marginTop: "100px", textAlign: "center" },
  input: { margin: "0 5px" },
  submit: { marginTop: "10px", cursor: "pointer" },
  form: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.5rem",
    },
  },
});

export default Login;
