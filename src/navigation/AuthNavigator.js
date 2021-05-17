import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import AddProfileScreen from '../screens/AddProfileScreen';
import AddPersonalDetailScreen from '../screens/AddPersonalDetailScreen';
import JobListingScreen from '../screens/JobListingScreen';
import AddWorkScreen from '../screens/AddWorkScreen';
import JobDescriptionScreen from '../screens/JobDescriptionScreen';
import JobListFilterScreen from '../screens/JobListFilterScreen';
import FavoriteJobScreen from '../screens/FavoriteJobScreen';
import JobSearchScreen from '../screens/JobSearchScreen';
import MyJobScreen from '../screens/MyJobScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import FeaturedProfessional from '../screens/FeaturedProfessional';
import ShareApp from '../screens/ShareApp';
import UploadResumeScreen from '../screens/UploadResumeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ApplyNowScreen from '../screens/ApplyNowScreen';
import MyJobDetailScreen from '../screens/MyJobDetailScreen';

import DrawerNavigator from './DrawerNavigator';

import ScreenSettings from './ScreenSettings';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainStack"
      component={DrawerNavigator}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyJobDetail"
      component={MyJobDetailScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ApplyNow"
      component={ApplyNowScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyJob"
      component={MyJobScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UploadResume"
      component={UploadResumeScreen}
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
      name="JobListing"
      component={JobListingScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="AddWork"
      component={AddWorkScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="JobDescription"
      component={JobDescriptionScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="JobListFilter"
      component={JobListFilterScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="JobSearch"
      component={JobSearchScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="FavoriteJob"
      component={FavoriteJobScreen}
      options={ScreenSettings}
    />
    <Stack.Screen
      name="Confirmation"
      component={ConfirmationScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
