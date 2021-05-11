import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import {StyleSheet, View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Colors from './src/layout/Colors';
import Layout from './src/layout/Layout';
import Theme from './src/navigation/Theme';
import {ImageBackground} from 'react-native';
import JobCard from './src/components/JobListing/JobCard';
import JobListing from './src/components/JobListing/JobListing';
import JobListFilter from './src/components/JobListFilter';
import JobDescription from './src/components/JobDescription';

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from auto hiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    await this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    this.setState({appIsReady: true}, async () => {
      await SplashScreen.hideAsync();
    });
  };

  render() {
    if (!this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <ImageBackground
            style={{width: Layout.window.width, height: Layout.window.height}}
            source={require('./src/assets/images/splash/splash.png')}
          />
        </View>
      );
    }

    return (
      <SafeAreaProvider>
        <NavigationContainer theme={Theme}>
          {/* <AuthNavigator /> */}
          {/* <JobCard/> */}
          {/* <JobListing/> */}
          <JobListFilter/>
          {/* <JobDescription/> */}
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
