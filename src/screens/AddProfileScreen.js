import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import Colors from '../layout/Colors';
import Font from '../layout/Font';

class AddProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo/logo-with-title.png')}
            />
          </View>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.title}>Create your profile</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    padding: 15,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 150,
  },
  inputBoxContainer: {
    marginVertical: 10,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
  },
});
AddProfileScreen.propTypes = {};

export default AddProfileScreen;
