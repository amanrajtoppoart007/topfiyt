import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import AddProfileScreen from '../screens/AddProfileScreen';
import AddPersonalDetailScreen from '../screens/AddPersonalDetailScreen';
import JobListingScreen from '../screens/JobListingScreen';
import ScreenSettings from './ScreenSettings';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="AddProfile"
      component={AddProfileScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="AddPersonalDetail"
      component={AddPersonalDetailScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="JobListing"
      component={JobListingScreen}
      options={ScreenSettings}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
