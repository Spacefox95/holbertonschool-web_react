import holbertonLogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import React, { useContext } from "react";
import { newContext } from "../Context/context";

const Header = () => {
  const { user, logOut } = useContext(newContext);

  return (
    <>
      <header className={css(styles.header)}>
        <img
          className={css(styles.logo)}
          src={holbertonLogo}
          alt="holberton logo"
        />
        <h1 className={css(styles.title)}>School Dashboard</h1>
      </header>

      {user.isLoggedIn && (
        <section id="logoutSection" className={css(styles.logOutSection)}>
          <p>
            Welcome {user.email}{" "}
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
    </>
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
    color: "#e1003c",
  },
  logOutSection: {
    marginTop: "10px",
    fontSize: "14px",
  },
});

export default Header;
