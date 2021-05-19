import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import ScreenSettings from './ScreenSettings';
import JobListingScreen from '../screens/JobListingScreen';
import JobDescriptionScreen from '../screens/JobDescriptionScreen';
const JobSectionNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen
      name="JobListing"
      component={JobListingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="JobDescription"
      component={JobDescriptionScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default JobSectionNavigator;
