import React, { useContext } from "react";
import { getCurrentYear, getFooterCopy } from "../utils/utils";
import { newContext } from "../Context/context";

function Footer() {
  const { user, logOut } = useContext(newContext);

  return (
    <footer className="App-footer">
      <p>
        Copyright {getCurrentYear()} {getFooterCopy()}
      </p>
      {user?.isLoggedIn && (
        <p>
          Welcome <strong>{user.email}</strong>{" "}
          (<a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              logOut();
            }}
            aria-label="Logout link"
          >
            logout
          </a>)
        </p>
      )}
    </footer>
  );
}

export default Footer;
