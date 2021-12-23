import React from 'react';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import defaultAvatar from './chel.png';
import * as authOperations from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.btn}>
      Выхода нет
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
