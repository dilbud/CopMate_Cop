import 'react-native-gesture-handler';
import React from 'react';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// redux and async thunk
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// navigation imports
import { navigationRef } from './RootNavigation';
import UserNavigation from './navigation/UserNavigation';
import AuthNavigation from './navigation/AuthNavigation';
// reducer imports
import AuthReducer from './store/reducers/AuthReducer'
// combine reducers
const rootReducer = combineReducers({
  Auth: AuthReducer
});
// create store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));
// render app
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}>
          {/* <AuthNavigation /> */}
          <UserNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
