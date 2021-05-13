import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from '../layout/Colors';

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Hellp</Text>
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
});
HomeScreen.propTypes = {};

export default HomeScreen;
