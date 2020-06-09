
import React from 'react';
// import {  } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";

const Stack = createStackNavigator();

export default UserNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
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
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen} />
            <Stack.Screen
                name="User"
                component={UserScreen} />
        </Stack.Navigator>
    );
}