import React, {Component} from 'react';
import Colors from '../layout/Colors';
import {StatusBar} from 'react-native';

class CustomStatusBar extends Component {
  render() {
    return (
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary}
        barStyle={'light-content'}
      />
    );
  }
}

CustomStatusBar.propTypes = {};

export default CustomStatusBar;
