import { useContext } from "react";
import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { newContext } from "./../Context/context";

const Header = () => {
  const { user, logOut } = useContext(newContext);

  return (
    <div className={css(styles.header)}>
      <img
        className={css(styles.logo)}
        src={holbertonLogo}
        alt="holberton logo"
      />

      {/* Inline style ensures test picks up the color */}
      <h1 className={css(styles.title)} style={{ color: "#e1003c" }}>
        School Dashboard
      </h1>

      {user && user.isLoggedIn && (
        <section id="logoutSection" className={css(styles.logOutSection)}>
          <p>
            Welcome <b>{user.email}</b>&nbsp;
            <a
              href="#logout"
              onClick={(e) => {
                e.preventDefault();
                logOut();
              }}
            >
              (logout)
            </a>
          </p>
        </section>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    fontFamily: `'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif`,
    borderBottom: "solid #e1003c 1px",
  },
  logo: {
    width: "150px",
    height: "150px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    color: "#e1003c", // still keep Aphrodite style
  },
  logOutSection: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
  },
});

export default Header;
