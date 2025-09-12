import { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';

import HolbertonLogo from '../assets/holberton-logo.jpg';
import { newContext } from '../Context/context';

function Header() {
    const context = useContext(newContext);
    const { user, logOut } = context || {};

    const handleLogoutClick = (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        if (typeof logOut === 'function') {
            logOut();
        }
    };

    return (
        <header className={css(styles.AppHeader)}>
            <div className={css(styles.headerRow)}>
                <img
                    className={css(styles.AppLogo)}
                    src={HolbertonLogo}
                    alt="holberton logo"
                />

                <h1
                    className={css(styles.AppHeaderH1)}
                    style={{ color: 'rgba(225, 0, 60, 1)' }}
                >
                    School Dashboard
                </h1>
            </div>

            {user && user.isLoggedIn && (
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
            )}
        </header>
    );
}

export default Header;


const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '0.25rem solid #e1003c',
        paddingBottom: '1rem',
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
    },
    AppHeaderH1: {
        fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontWeight: 600,
        letterSpacing: '0.025rem',
        color: '#e1003c',
    },
    AppLogo: {
        height: '15rem',
    },
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