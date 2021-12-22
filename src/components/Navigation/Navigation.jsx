import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as authSelectors from '../../redux/auth/auth-selectors';

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

const Navigaton = ({ isAuthenticated }) => (
  <div>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Телефонная книга
      </NavLink>
    )}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigaton);
