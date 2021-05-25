import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ResumeWritingServiceScreen from '../screens/ResumeWritingServiceScreen';

import CreatePersonalDetailScreen from '../screens/Resume/CreatePersonalDetailScreen';
import WorkExperienceScreen from '../screens/Resume/WorkExperienceScreen';
import EducationScreen from '../screens/Resume/EducationScreen';
import ProjectScreen from '../screens/Resume/ProjectScreen';
import ReferenceScreen from '../screens/Resume/ReferenceScreen';
import CompetencesScreen from '../screens/Resume/CompetencesScreen';
import PreferencesScreen from '../screens/Resume/PreferencesScreen';
import ObjectiveScreen from '../screens/Resume/ObjectiveScreen';
import SkillsScreen from '../screens/Resume/SkillsScreen';
import TemplatesScreen from '../screens/Resume/TemplatesScreen';

import ScreenSettings from './ScreenSettings';
const Stack = createStackNavigator();
const ResumeServiceNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen
      name="ResumeWritingServiceSection"
      component={ResumeWritingServiceScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Templates"
      component={TemplatesScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Skills"
      component={SkillsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Objective"
      component={ObjectiveScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Preferences"
      component={PreferencesScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Competences"
      component={CompetencesScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Reference"
      component={ReferenceScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Project"
      component={ProjectScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Education"
      component={EducationScreen}
      options={{headerShown: false}}
    />
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
  </Stack.Navigator>
);

export default ResumeServiceNavigator;
