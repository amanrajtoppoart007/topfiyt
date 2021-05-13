import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Colors from '../layout/Colors';
import {StatusBar} from 'react-native';

class CustomStatusBar extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar
          animated={true}
          backgroundColor={Colors.primary}
          barStyle={'light-content'}
        />
      </React.Fragment>
    );
  }
}

CustomStatusBar.propTypes = {};

export default CustomStatusBar;
