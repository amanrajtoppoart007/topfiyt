import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Pressable, StatusBar,
} from "react-native";

import {Icon, ListItem, Divider} from 'react-native-elements';

import Colors from '../layout/Colors';
import Font from '../layout/Font';

const SideBar = props => {
  const menus = [
    {
      key: 'menu-item-one',
      title: 'Home',
      route: 'Home',
    },
    {
      key: 'menu-item-two',
      title: 'Featured Professionals',
      route: 'FeaturedProfessionals',
    },
    {
      key: 'menu-item-three',
      title: 'Employers',
      route: 'Employers',
    },
    {
      key: 'menu-item-four',
      title: 'Agents',
      route: 'Agents',
    },
    {
      key: 'menu-item-five',
      title: 'Community /Forum',
      route: 'Forum',
    },
    {
      key: 'menu-item-six',
      title: 'Resume Writing Service',
      route: 'ResumeWritingService',
    },
    {
      key: 'menu-item-seven',
      title: 'News',
      route: 'News',
    },
  ];

  const settings = [
    {
      key: 'menu-item-one',
      title: 'My Profile',
      route: 'MyProfile',
    },
    {
      key: 'menu-item-two',
      title: 'My Job',
      route: 'MyJob',
    },
    {
      key: 'menu-item-three',
      title: 'Share App',
      route: 'ShareApp',
    },
    {
      key: 'menu-item-four',
      title: 'Setting',
      route: 'Setting',
    },
    {
      key: 'menu-item-five',
      title: 'Logout',
      route: 'Login',
    },
  ];

  const closeMenu = () => {
    props.navigation.closeDrawer();
  };

  const logout = () => {
    props.navigation.navigate('Login');
  };
  const keyExtractor = item => item.key.toString();
  const renderItem = ({item}) => (
    <Pressable
      style={styles.menuContainerStyle}
      onPress={() =>
        item.route === 'LogOut'
          ? logout()
          : props.navigation.navigate(item.route)
      }>
      <View style={styles.menuContentWrapper}>
        <View>
          <Text style={{color: Colors.white}}>{item.title}</Text>
        </View>
        <View>
          <Icon
            iconStyle={[
              styles.menuIconStyle,
              {color: Colors.white, fontSize: 10},
            ]}
            containerStyle={[
              styles.menuIconContainerStyle,
              {backgroundColor: Colors.primary},
            ]}
            name={'chevron-right'}
            type={'font-awesome-5'}
          />
        </View>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.name}>Hi John !</Text>
            <Text style={styles.mobile}>009939349</Text>
          </View>
          <View>
            <Pressable onPress={() => closeMenu()}>
              <Icon
                iconStyle={[styles.menuIconStyle, {color: Colors.primary}]}
                containerStyle={[
                  styles.menuIconContainerStyle,
                  {backgroundColor: Colors.white},
                ]}
                name={'closecircleo'}
                type={'antdesign'}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={menus}
          renderItem={renderItem}
        />
      </View>
      <Divider style={styles.divider} />
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={settings}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: StatusBar.currentHeight,
  },
  divider: {
    backgroundColor: Colors.dividerDark,
    width: '90%',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuContainerStyle: {
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  menuContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIconStyle: {
    fontSize: 20,
    color: Colors.white,
  },
  menuIconContainerStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 14,
    color: Colors.white,
  },
  mobile: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
});

export default SideBar;
