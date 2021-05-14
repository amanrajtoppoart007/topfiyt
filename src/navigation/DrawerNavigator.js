import React from 'react';
import {Image} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SideBar from '../components/SideBar';

import ProfileNavigator from './ProfileNavigator';

import BookingNavigator from './BookingNavigator';

import NotificationScreen from '../screens/NotificationScreen';

import PaymentScreen from '../screens/PaymentScreen';
import ContactScreen from '../screens/ContactScreen';

import WishListScreen from '../screens/WishListScreen';
import OrderListScreen from '../screens/Product/OrderListScreen';

import ProductNavigator from './ProductNavigator';
import ScreenSettings from './ScreenSettings';

const Drawer = createDrawerNavigator();

const ProductDrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}
    drawerContent={props => <SideBar {...props} />}>
    <Drawer.Screen
      name="Shop"
      component={ProductNavigator}
      options={{
        title: 'Home',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/home.png')}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        title: 'My Profile',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/man.png')}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        title: 'Notification',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/bell.png')}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Bookings"
      component={BookingNavigator}
      options={{
        title: 'Bookings',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/calendar.png')}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="WishList"
      component={WishListScreen}
      options={{
        title: 'Wish List',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/love.png')}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="OrderList"
      component={OrderListScreen}
      options={{
        title: 'My Orders',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/orders.png')}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Payments"
      component={PaymentScreen}
      options={{
        title: 'Payments',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/wallet.png')}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        title: 'Contact Us',
        drawerIcon: () => (
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/telephone-call.png')}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default ProductDrawerNavigator;
