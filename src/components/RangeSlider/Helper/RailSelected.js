import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../layout/Colors';

const RailSelected = () => {
  return <View style={styles.root} />;
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 4,
    backgroundColor: Colors.white,
    borderRadius: 2,
  },
});
