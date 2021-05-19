import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../assets/images/logo/logo.png';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import Layout from '../layout/Layout';
import PropTypes from 'prop-types';
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {label: 'EN', value: 'english'},
        {label: 'HI', value: 'hindi'},
        {label: 'RU', value: 'russian'},
      ],
    };
  }

  openDrawer() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => this.openDrawer()}
            style={{alignItems: 'flex-end'}}>
            <Text style={styles.line1} />
            <Text style={styles.line2} />
            <Text style={styles.line3} />
          </Pressable>

          <View style={styles.logoView}>
            <Image style={styles.logo} source={logo} />
          </View>

          <View style={styles.icons}>
            <Icon style={styles.icon} name="notifications" />
          </View>
        </View>
      </View>
    );
  }
}

MainHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: 48,
    backgroundColor: Colors.white,
  },
  header: {
    height: 48,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line1: {
    width: 25,
    height: 1,
    color: 'yellow',
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 3,
    borderColor: Colors.primary,
  },
  line2: {
    width: 18,
    height: 1,
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 3,
    color: Colors.primary,
    borderColor: Colors.primary,
  },
  line3: {
    width: 10,
    height: 1,
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 3,
    color: Colors.primary,
    borderColor: Colors.primary,
  },
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 10,
    zIndex: 9999999,
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
    position: 'relative',
    left: '50%',
  },
  logo: {
    width: 24,
    height: 31,
  },
});
