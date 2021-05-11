import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Colors from '../layout/Colors';
import Layout from '../layout/Layout';

class AddressTextArea extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width * 0.9,
    height: 153,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
});

AddressTextArea.propTypes = {};

export default AddressTextArea;
