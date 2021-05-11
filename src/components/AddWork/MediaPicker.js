import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../layout/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Font from '../../layout/Font';

class MediaPicker extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{marginBottom: 15}}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Add Videos </Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
              }}>
              <FontAwesome5 name={'plus'} size={24} color={Colors.mutedText} />
            </View>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Add Photo</Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
              }}>
              <FontAwesome5 name={'plus'} size={24} color={Colors.mutedText} />
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    padding: 15,
  },
  labelWrapper: {
    marginBottom: 3,
    marginHorizontal: 10,
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
  inputBox: {
    marginVertical: 5,
    height: 65,
  },
  inputContainerStyle: {
    width: 342,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
  },
  input: {
    width: 342,
    height: 40,
    borderRadius: 5,
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
    paddingHorizontal: 10,
  },
});

MediaPicker.propTypes = {};

export default MediaPicker;
