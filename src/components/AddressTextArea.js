import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import Colors from '../layout/Colors';
import Layout from '../layout/Layout';
import Home from '../assets/images/svg/home.svg';
import Font from "../layout/Font";

class AddressTextArea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '10%'}}>
          <Home style={{marginVertical: 10}} width={25} height={25} />
        </View>
        <View style={{width: '95%'}}>
          <Input
            placeholder={'Enter your Address here'}
            multiline={true}
            maxLength={120}
            style={styles.textArea}
            inputContainerStyle={{
              borderWidth: 0,
              borderColor: Colors.transparent,
            }}
            containerStyle={styles.textAreaContainerStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Layout.window.width * 0.9,
    borderRadius: 5,
    backgroundColor: Colors.white,
    padding: 5,
  },
  textAreaContainerStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    borderColor: Colors.transparent,
  },
  textArea: {
    borderWidth: 0,
    borderColor: Colors.transparent,
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
  },
});

AddressTextArea.propTypes = {};

export default AddressTextArea;
