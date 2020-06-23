
import React from 'react';
// import {  } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export default UserNavigation = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen} />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen} />
        </Stack.Navigator>
    );
}