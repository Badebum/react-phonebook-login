import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contact-actions';

axios.defaults.baseURL = 'https://61b07b553c954f001722a3ec.mockapi.io/contacts';

export const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

try {
  const { data } = await axios.get('/contacts');
  dispatch(fetchContactSuccess(data));
} catch (error) {
  dispatch(fetchContactError(error));
}

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = contactEditorState => dispatch => {
  const contacts = {
    name: contactEditorState.name,
    number: contactEditorState.number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContacts = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
