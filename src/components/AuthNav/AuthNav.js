import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './AuthNav.module.css';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#fff',
  },
  activeLink: {
    color: '#ff5100',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Регистрация
    </NavLink>

    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;
