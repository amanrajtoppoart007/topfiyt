import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MyJobDetailScreen from '../screens/MyJobDetailScreen';
import NotificationScreen from '../screens/NotificationScreen';
const Stack = createStackNavigator();
import ScreenSettings from './ScreenSettings';
const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyJobDetail"
      component={MyJobDetailScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
