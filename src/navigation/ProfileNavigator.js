import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddProfileScreen from '../screens/MyProfile/AddProfileScreen';
import AddPersonalDetailScreen from '../screens/MyProfile/AddPersonalDetailScreen';
import AddWorkScreen from '../screens/MyProfile/AddWorkScreen';
import UploadResumeScreen from '../screens/MyProfile/UploadResumeScreen';
const Stack = createStackNavigator();
import ScreenSettings from './ScreenSettings';
import MemberShipUpgradeScreen from "../screens/MyProfile/MemberShipUpgradeScreen";
import PaymentScreen from "../screens/MyProfile/PaymentScreen";
import PaymentConfirmationScreen from "../screens/MyProfile/PaymentConfirmationScreen";
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
  </Stack.Navigator>
);

export default ProfileNavigator;
