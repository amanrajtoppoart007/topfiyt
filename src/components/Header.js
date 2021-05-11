import React, {useState} from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/logo/logo.png';
import Colors from '../layout/Colors';
import Font from '../layout/Font';

function Header() {
  const [show, setShow] = useState(false);
  const myFun = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Icon style={styles.backArrow} name="keyboard-backspace" />
        </View>

        <View style={styles.logoView}>
          <Image style={styles.logo} source={logo} />
        </View>

        <View style={styles.icons}>
          <Icon onPress={() => myFun()} style={styles.icon} name="search" />
          <Icon style={styles.icon} name="notifications" />
          <Icon style={styles.icon} name="filter-list" />
        </View>
      </View>

      {show ? (
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputSearch}
            placeholderTextColor={'white'}
            placeholder="Search Jobd"
          />
          <Icon style={styles.search} name="search" />
        </View>
      ) : null}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: 'white',
  },
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 10,
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
  },
  logo: {
    width: 30,
    height: 30,
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
    color: 'white',
    marginRight: 15,
  },
});
