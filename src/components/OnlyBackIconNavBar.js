import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/logo/logo.png';
import Colors from '../layout/Colors';

function OnlyBackButtonNavBar({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{width: '5%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={styles.backArrow} name="keyboard-backspace" />
          </TouchableOpacity>
        </View>
        <View style={[styles.logoView, {width: '95%', paddingRight: 30}]}>
          <Image style={styles.logo} source={logo} />
        </View>
      </View>
    </View>
  );
}

export default OnlyBackButtonNavBar;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.white,
  },
  header: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 30,
    color: Colors.primary,
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 31,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
  },
});
