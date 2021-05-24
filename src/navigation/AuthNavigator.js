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
import MainNavigator from './MainNavigator';

import CreatePersonalDetailScreen from '../screens/Resume/CreatePersonalDetailScreen';
import WorkExperienceScreen from '../screens/Resume/WorkExperienceScreen';
import ScreenSettings from './ScreenSettings';
const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WorkExperience"
      component={WorkExperienceScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="CreatePersonal"
      component={CreatePersonalDetailScreen}
      options={{headerShown: false}}
    />
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
      name="MainStack"
      component={MainNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
