import 'react-native-gesture-handler';
import React, { useState } from 'react';
// navigation
import { SafeAreaProvider } from 'react-native-safe-area-context';
// redux and async thunk
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// navigation imports
import PathNavigation from './navigation/PathNavigation';
// reducer imports
import AuthReducer from './store/reducers/AuthReducer';
import FineReducer from './store/reducers/FineReducer';
// combine reducers
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Fine: FineReducer,
});
// create store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));
// render app
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PathNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
