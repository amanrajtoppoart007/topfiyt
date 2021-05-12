import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import logo from '../assets/images/logo/logo.png';
import Colors from '../layout/Colors';
function ImageNavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.logoView, {width: '100%', paddingRight: 50}]}>
          <Image style={styles.logo} source={logo} />
        </View>
      </View>
    </View>
  );
}

export default ImageNavBar;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  header: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logoView: {
    marginLeft: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 31,
  },
});
