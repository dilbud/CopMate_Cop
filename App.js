import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { navigationRef } from './RootNavigation';
import UserNavigation from './navigation/UserNavigation';
import AuthReducer from './store/reducers/AuthReducer'

const rootReducer = combineReducers({
  Auth: AuthReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}>
          <UserNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
