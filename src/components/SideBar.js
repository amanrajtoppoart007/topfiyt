import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Font from '../layout/Font';
import Colors from '../layout/Colors';

const SideBar = props => {
  const closeMenu = () => {
    props.navigation.closeDrawer();
  };

  const logOut = () => {
    props.navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => closeMenu()} style={styles.backButton} />
      <View style={styles.sideMenuProfile}>
        <Text style={styles.name}>Mathew James</Text>
        <Text style={styles.email}>mathewjames@gmail.com</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList labelStyle={styles.drawerItem} {...props} />
        <DrawerItem
          labelStyle={styles.drawerItem}
          label={'Log Out'}
          onPress={() => logOut()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.background},
  drawerItem: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 17,
    color: Colors.white,
  },
  backButton: {
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sideMenuProfile: {
    height: 60,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  name: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 25,
    color: Colors.white,
  },
  email: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.gray,
  },

  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SideBar;
