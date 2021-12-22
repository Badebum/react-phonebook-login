import React, { Component } from 'react';
import ContactList from '../../components/ContactList';
import ContactEditor from '../../components/ContactEditor';
import Filter from '../../components/Filter';

import { connect } from 'react-redux';
import * as operatimport from '../../redux/contact/contact.operations';
import { getLoading } from '../../redux/contact/contact-selector';
import styles from './ContactPage.module.css';

// import Modal from './components/BackDrop/Modal';

class ContactPage extends Component {
  state = {
    showModal: false,
  };

  // toggleModal = () => {
  //   this.setState(({showModal}) => ({showModal: !showModal}))
  // }

  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    // const { showModal } = this.state;

    return (
      <div className={styles.cont_container}>
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>this Modal content</h1>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )} */}
        {/* {this.props.isLoadingTodos && <h1>Loading...</h1>} */}

        <div className={styles.cont_form}>
          <h2>Add contact</h2>
          <ContactEditor />
        </div>

        <div className={styles.cont_list}>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToPromps = state => ({
  isLoadingTodos: getLoading(state),
});

const mapDispatchToPtops = dispatch => ({
  fetchContact: () => dispatch(operatimport.fetchContact()),
});

export default connect(mapStateToPromps, mapDispatchToPtops)(ContactPage);
