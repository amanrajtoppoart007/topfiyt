import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AddProfileScreen from '../screens/AddProfileScreen';
import AddPersonalDetailScreen from '../screens/AddPersonalDetailScreen';
import AddWorkScreen from '../screens/AddWorkScreen';
import SubmissionConfirmationScreen from '../screens/SubmissionConfirmationScreen';
import UploadResumeScreen from '../screens/UploadResumeScreen';
import MemberShipUpgradeScreen from '../screens/MemberShipUpgradeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentConfirmationScreen from '../screens/PaymentConfirmationScreen';
import MainNavigator from './MainNavigator';

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
      name="AddWork"
      component={AddWorkScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="Confirmation"
      component={SubmissionConfirmationScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UploadResume"
      component={UploadResumeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MemberShipUpgrade"
      component={MemberShipUpgradeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Payment"
      component={PaymentScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="PaymentConfirmation"
      component={PaymentConfirmationScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MainStack"
      component={MainNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
