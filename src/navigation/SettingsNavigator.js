import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../screens/Settings/SettingsScreen';
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen';
import ResetPasswordConfirmationScreen from '../screens/Settings/ResetPasswordConfirmationScreen';

import ScreenSettings from './ScreenSettings';
const Stack = createStackNavigator();
const SettingsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen
      name="SettingsHome"
      component={SettingsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ResetPasswordConfirmation"
      component={ResetPasswordConfirmationScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
