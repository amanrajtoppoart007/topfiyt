import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';

import Clock from '../components/Clock';
import Colors from '../layout/Colors';
import Font from "../layout/Font";
import Layout from "../layout/Layout";

class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          key: 'notification-item-one',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: 'now',
        },
        {
          key: 'notification-item-two',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '2 min ago',
        },
        {
          key: 'notification-item-three',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '5 min ago',
        },
        {
          key: 'notification-item-four',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '8 min ago',
        },
        {
          key: 'notification-item-five',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '20 min ago',
        },
        {
          key: 'notification-item-six',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '30 min ago',
        },
        {
          key: 'notification-item-seven',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '1 hour ago',
        },
        {
          key: 'notification-item-eight',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '1.30 hour ago',
        },
        {
          key: 'notification-item-nine',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '2 hour ago',
        },
        {
          key: 'notification-item-ten',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '1 day ago',
        },
        {
          key: 'notification-item-eleven',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '2 days ago',
        },
        {
          key: 'notification-item-twelve',
          title: 'Topfyit',
          message:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
          time: '1 month ago',
        },
      ],
    };
  }

  _renderItem({item}) {
    return (
      <View>
        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.marginHorizontal}>
              <Image
                source={require('../assets/images/logo/logo.png')}
                style={styles.logo}
              />
            </View>
            <View style={styles.marginHorizontal}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.marginHorizontal}>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
          <View style={{padding: 8}}>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        </View>
        <Divider style={{backgroundColor: Colors.mutedText}} />
      </View>
    );
  }
  keyExtractor = item => item.key.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Clock />
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={this.keyExtractor}
            data={this.state.notifications}
            renderItem={this._renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logo: {
    width: 24,
    height: 30,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.mutedText,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  time: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 8,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  message: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 8,
    color: Colors.black,
    width: Layout.window.width * 0.95,
  },
  marginHorizontal: {
    marginHorizontal: 5,
  },
});
NotificationScreen.propTypes = {};

export default NotificationScreen;
