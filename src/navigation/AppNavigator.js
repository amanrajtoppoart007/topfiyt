import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import SideBar from '../components/SideBar';
import HomeNavigator from './HomeNavigator';
import ScreenSettings from './ScreenSettings';

import EmployerListScreen from '../screens/EmployerListScreen';
import AgentListScreen from '../screens/AgentListScreen';
import ForumScreen from '../screens/ForumScreen';
import ResumeWritingServiceScreen from '../screens/ResumeWritingServiceScreen';
import NewsListScreen from '../screens/NewsListScreen';
import MyJob from '../screens/MyJobScreen';
import MyProfileScreen from '../screens/MyProfileScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...ScreenSettings,
      }}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
      }}
      drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: 'Home',
        }}
      />

      <Drawer.Screen
        name="Employers"
        component={EmployerListScreen}
        options={{
          title: 'My Profile',
        }}
      />
      <Drawer.Screen
        name="Agents"
        component={AgentListScreen}
        options={{
          title: 'Agents',
        }}
      />
      <Drawer.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          title: 'Community/Forum',
        }}
      />
      <Drawer.Screen
        name="ResumeWritingService"
        component={ResumeWritingServiceScreen}
        options={{
          title: 'Resume Writing Service',
        }}
      />
      <Drawer.Screen
        name="News"
        component={NewsListScreen}
        options={{
          title: 'My Orders',
        }}
      />
      <Drawer.Screen
        name="MyJobs"
        component={MyJob}
        options={{
          title: 'My Jobs',
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          title: 'Contact Us',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
