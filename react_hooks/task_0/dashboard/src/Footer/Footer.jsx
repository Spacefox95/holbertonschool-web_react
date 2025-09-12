import React, { useContext } from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';
import { StyleSheet, css } from 'aphrodite';


function Footer() {
  const context = useContext(newContext);
  const { user, logOut } = context || {};

  const shouldShowContact = user && user.isLoggedIn === true;

  const handleLogoutClick = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (typeof logOut == 'function') {
      logOut()
    }
  }

  return (
    <footer className='App-footer'>
      <p>Copyright {getCurrentYear()} {getFooterCopy()}</p>
      {shouldShowContact && (<>
        <section id="logoutSection" className={css(styles.logoutSection)}>
          Welcome <b>{user.email}</b>
          <a
            href="#"
            className={css(styles.logoutLink)}
            onClick={handleLogoutClick}
          >
            (logout)
          </a>
        </section>
        <p>
          <a href="#" aria-label="Contact us link">Contact us</a>
        </p>
      </>
      )}
    </footer>
  );
}


const styles = StyleSheet.create({

  logoutSection: {
    marginTop: '0.75rem',
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  logoutLink: {
    marginLeft: '0.25rem',
    cursor: 'pointer',
  },
});

export default Footer;