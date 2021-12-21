import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import * as operations from '../../redux/contact/contact.operations';
import { connect } from 'react-redux';
import {getVisibleContacts} from '../../redux/contact/contact-selector'

const ContactList = ({ contact, deleteContact }) => (
  <ul className={styles.container}>
    {contact.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <p>
          {name} {number}
        </p>

        <button
          type="button"
          className={styles.button}
          onClick={() => deleteContact(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contact: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
