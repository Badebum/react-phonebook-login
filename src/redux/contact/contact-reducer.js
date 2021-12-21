import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contact-actions';

const items = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${state.name} is already in contacts`)
      : [payload, ...state],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
