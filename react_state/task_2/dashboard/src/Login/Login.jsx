import { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { enableSubmit: false };
  }

  componentDidMount() {
    this.validateForm();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.email !== this.props.email ||
      prevProps.password !== this.props.password
    ) {
      this.validateForm();
    }
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password, logIn } = this.props;
    logIn(email, password);
  };

  handleChangeEmail = (event) => {
    this.props.onEmailChange?.(event.target.value);
    this.validateForm(event.target.value, this.props.password);
  };

  handleChangePassword = (event) => {
    this.props.onPasswordChange?.(event.target.value);
    this.validateForm(this.props.email, event.target.value);
  };

  validateForm = (email = this.props.email, password = this.props.password) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 8;
    this.setState({ enableSubmit: emailValid && passwordValid });
  };

  render() {
    const { email, password } = this.props;
    const { enableSubmit } = this.state;

    return (
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>

        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
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
