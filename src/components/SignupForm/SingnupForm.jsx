import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './SingnupForm.module.css';
import * as authOperations from '../../redux/auth/auth-operations';

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.name || !this.state.email || !this.state.password) {
      alert('Fill the Registration form');
      return;
    }
    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Registration Page</h2>

        <form onSubmit={this.handleSubmit} className={styles.input_menu}>
          <div className={styles.input_item}>
            <label htmlFor="name" className={styles.form_label}>
              Name
            </label>

            <input
              type="text"
              className={styles.input}
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.input_item}>
            <label htmlFor="email" className={styles.form_label}>
              Email address
            </label>

            <input
              type="email"
              className={styles.input}
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.input_item}>
            <label htmlFor="password" className={styles.form_label}>
              Password
            </label>

            <input
              type="password"
              className={styles.input}
              placeholder={'More than 7 symbols'}
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className={styles.sbt_button}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};
export default connect(null, mapDispatchToProps)(SignupForm);
