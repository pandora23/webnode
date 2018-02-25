import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import peerStoreEnhancer from './enchancers';

import reducer from 'redux/reducers';

const persistConfig = {
  key: 'directories',
  storage
};

export const store = createStore(
  persistReducer(persistConfig, reducer)
);

export const persistor = persistStore(store);

peerStoreEnhancer();
