import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon01 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FormScreen from '../screens/FormScreen';
import FineScreen from '../screens/FineScreen';
import SubmitScreen from '../screens/SubmitScreen';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="form"
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
      name="form"
      component={FormScreen}
      options={{
        title: 'Details',
        headerLeft: () => (
          <Icon01.Button
            style={{ marginLeft: 15 }}
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Stack.Screen name="fine" component={FineScreen} />
    <Stack.Screen
      name="submit"
      component={SubmitScreen}
      options={{
        title: 'Submit',
      }}
    />
  </Stack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon01.Button
            style={{ marginLeft: 15 }}
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

export default UserNavigation = () => {
  return (
    <Drawer.Navigator
      overlayColor="#dbd9ff69"
      activeTintColor="#4300f9"
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 260,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Icon name="account-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
