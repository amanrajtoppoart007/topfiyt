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
import Font from '../layout/Font';

function BackButtonNavBar({navigation, containerStyle}) {
  return (
    <React.Fragment>
      <View style={[styles.header, containerStyle ?? {}]}>
        <View style={{width: '10%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={styles.backArrow} name="keyboard-backspace" />
          </TouchableOpacity>
        </View>
        <View style={[styles.logoView, {width: '80%'}]}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={[styles.icons, {width: '10%'}]}>
          <Icon style={styles.icon} name="notifications" />
        </View>
      </View>
    </React.Fragment>
  );
}

export default BackButtonNavBar;

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 30,
    opacity: 0.7,
  },
  backArrow: {
    fontSize: 30,
    marginLeft: 10,
    color: Colors.primary,
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
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    backgroundColor: Colors.primary,
  },
  inputSearch: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: Font.PoppinsLight,
    paddingLeft: 15,
  },
  search: {
    fontSize: 25,
    color: Colors.white,
    marginRight: 15,
  },
});
