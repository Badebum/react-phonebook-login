import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import PropTypes from 'prop-types';
import styles from './LoginForm.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Страница логина</h1>

        <form
          className={styles.input_menu}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <div className={styles.input_item}>
            <label className={styles.form_label}>
              Почта
              <input
                className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className={styles.input_item}>
            <label className={styles.form_label}>
              Пароль
              <input
                className={styles.input}
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button type="submit" className={styles.sbt_button}>
            Войти
          </button>
        </form>
      </div>
    );
  }
}

LoginView.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
