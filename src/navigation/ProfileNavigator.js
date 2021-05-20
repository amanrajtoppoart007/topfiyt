import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddProfileScreen from '../screens/MyProfile/AddProfileScreen';
import AddPersonalDetailScreen from '../screens/MyProfile/AddPersonalDetailScreen';
import AddWorkScreen from '../screens/MyProfile/AddWorkScreen';
import UploadResumeScreen from '../screens/MyProfile/UploadResumeScreen';
const Stack = createStackNavigator();
import ScreenSettings from './ScreenSettings';
const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen
      name="MyProfileAddProfile"
      component={AddProfileScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyProfileAddPersonalDetail"
      component={AddPersonalDetailScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyProfileAddWork"
      component={AddWorkScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyProfileUploadResume"
      component={UploadResumeScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default ProfileNavigator;
