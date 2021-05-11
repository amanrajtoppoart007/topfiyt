import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import {Input} from 'react-native-elements';
import MediaPicker from "../components/AddWork/MediaPicker";
import NavBar from '../components/NavBar';

class AddWorkScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavBar navigation={this.props.navigation}/>
        <View style={styles.wrapper}>
          <View style={styles.inputBox}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Project Name</Text>
            </View>
            <Input
              placeholder={'Project Name'}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.input}
              placeholderTextColor={Colors.mutedText}
            />
          </View>
          <View style={styles.inputBox}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Role</Text>
            </View>
            <Input
              placeholder={'Role'}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.input}
              placeholderTextColor={Colors.mutedText}
            />
          </View>
          <View style={{marginVertical: 15}}>
            <MediaPicker />
          </View>
        </View>
      </SafeAreaView>
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
AddWorkScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddWorkScreen;
