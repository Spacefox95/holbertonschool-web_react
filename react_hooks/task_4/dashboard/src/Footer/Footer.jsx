import React, { useContext } from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';
import { StyleSheet, css } from 'aphrodite';


function Footer() {
  const context = useContext(newContext);
  const { user } = context || {};

  const shouldShowContact = user && user.isLoggedIn === true;


  return (
    <footer className={css(styles.AppFooter)}>
      <p>Copyright {getCurrentYear()} {getFooterCopy()}</p>
      {shouldShowContact && (<>

        <p>
          <a href="#" aria-label="Contact us link">Contact us</a>
        </p>
      </>
      )}
    </footer>
  );
}


const styles = StyleSheet.create({
  AppFooter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default Footer;