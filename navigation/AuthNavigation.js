import React from 'react';
// import {  } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import QrScreen from '../screens/QrScreen';

const Stack = createStackNavigator();

export default AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      mode="card"
      screenOptions={{
        headerStyle: { backgroundColor: 'papayawhip' },
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        gestureResponseDistance: {
          horizontal: 300,
        },
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
          };
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'LOGIN',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'SIGNUP',
        }}
      />
      <Stack.Screen
        name="QR"
        component={QrScreen}
        options={{
          title: 'QR VALIDATION',
        }}
      />
    </Stack.Navigator>
  );
};
