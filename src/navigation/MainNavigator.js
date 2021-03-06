import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from '../components/SideBar';
import HomeNavigator from './HomeNavigator';
import MyJobNavigator from './MyJobNavigator';
import JobSectionNavigator from './JobSectionNavigator';
import ProfileNavigator from './ProfileNavigator';
import ResumeServiceNavigator from './ResumeServiceNavigator';
import SettingsNavigator from './SettingsNavigator';
import ScreenSettings from './ScreenSettings';

import FeaturedProfessionalScreen from '../screens/FeaturedProfessionalScreen';
import EmployerListScreen from '../screens/EmployerListScreen';
import AgentListScreen from '../screens/AgentListScreen';
import ForumScreen from '../screens/ForumScreen';
import NewsListScreen from '../screens/NewsListScreen';
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...ScreenSettings,
      }}
      drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{
          title: 'HomeStack',
        }}
      />

      <Drawer.Screen
        name="FeaturedProfessionals"
        component={FeaturedProfessionalScreen}
        options={{
          title: 'Featured Professional',
        }}
      />
      <Drawer.Screen
        name="Employers"
        component={EmployerListScreen}
        options={{
          title: 'Employers',
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
        name="JobSection"
        component={JobSectionNavigator}
        options={{
          title: 'Job Section',
        }}
      />
      <Drawer.Screen
        name="ResumeWritingService"
        component={ResumeServiceNavigator}
        options={{
          title: 'Resume Writing Service',
        }}
      />
      <Drawer.Screen
        name="News"
        component={NewsListScreen}
        options={{
          title: 'News',
        }}
      />
      <Drawer.Screen
        name="MyJob"
        component={MyJobNavigator}
        options={{
          title: 'My Jobs',
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={ProfileNavigator}
        options={{
          title: 'My Profile',
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingsNavigator}
        options={{
          title: 'Setting',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
