import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyJobScreen from '../screens/MyJobScreen';
import MyJobDetailScreen from '../screens/MyJobDetailScreen';
const Stack = createStackNavigator();
import ScreenSettings from './ScreenSettings';
const MyJobNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen
      name="MyJobs"
      component={MyJobScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyJobDetail"
      component={MyJobDetailScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default MyJobNavigator;
