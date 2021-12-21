import contactReducer from './contact/contact-reducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

// const contactPersistConfig = {
//   key: 'contact',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
