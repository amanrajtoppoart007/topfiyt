import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Colors from '../../layout/Colors';

import Shapes from '../../components/PersonalDetails/Shapes';
import Font from '../../layout/Font';

import CountrySelect from '../../components/CountrySelect';
import StateSelect from '../../components/StateSelect';
import AddressTextArea from '../../components/AddressTextArea';
import Layout from '../../layout/Layout';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';

class AddPersonalDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Personal Details</Text>
            <Shapes width={174.95} height={16.02} />
          </View>
          <View style={styles.selectsWrapper}>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Nationality</Text>
              </View>

              <CountrySelect
                containerStyle={{width: Layout.window.width * 0.43}}
              />
            </View>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>State</Text>
              </View>

              <StateSelect
                containerStyle={{width: Layout.window.width * 0.43}}
              />
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Address</Text>
            </View>
            <AddressTextArea />
          </View>
          <View style={styles.row}>
            <View>
              <View style={[styles.labelWrapper, {paddingLeft: 10}]}>
                <Text style={styles.label}>Mobile</Text>
              </View>
              <Input
                keyboardType={'number-pad'}
                leftIcon={() => (
                  <Ionicons
                    style={{marginLeft: 10}}
                    name={'ios-call-outline'}
                    size={17}
                    color={Colors.primary}
                  />
                )}
                placeholder={'Your Mobile No.'}
                inputContainerStyle={styles.rowInputContainerStyle}
                inputStyle={[styles.rowInput, {marginTop: 8}]}
                placeholderTextColor={Colors.mutedText}
              />
            </View>
            <View>
              <View style={[styles.labelWrapper, {paddingLeft: 10}]}>
                <Text style={styles.label}>Pincode</Text>
              </View>
              <Input
                keyboardType={'number-pad'}
                leftIcon={() => (
                  <Ionicons
                    style={{marginLeft: 10}}
                    name={'location-outline'}
                    size={17}
                    color={Colors.primary}
                  />
                )}
                placeholder={'Your Pincode'}
                inputContainerStyle={styles.rowInputContainerStyle}
                inputStyle={[styles.rowInput, {marginTop: 8}]}
                placeholderTextColor={Colors.mutedText}
              />
            </View>
          </View>

          <View>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Profile</Text>
            </View>
            <View style={styles.pickerContainerStyle}>
              <Picker
                style={styles.pickerStyle}
                itemStyle={styles.pickerItemStyle}>
                <Picker.Item label="Actor" value="actor" />
                <Picker.Item label="Singer" value="singer" />
                <Picker.Item label="Dancer" value="dancer" />
              </Picker>
            </View>
          </View>

          <View style={styles.buttonSection}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MyProfileAddWork')}
              style={styles.button}>
              <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MyProfileAddWork')}
              style={styles.skipButton}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
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
    padding: 20,
  },
  titleWrapper: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 20,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  selectsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
    fontWeight: 'bold',
  },
  labelWrapper: {
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  rowInputBox: {
    marginVertical: 5,
    height: 65,
  },
  rowInputContainerStyle: {
    width: 175,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  rowInput: {
    width: 161,
    height: 40,
    borderRadius: 5,
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
  },
  pickerContainerStyle: {
    width: 373,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerStyle: {
    width: 373,
    height: 40,
    borderRadius: 5,
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.mutedText,
  },
  pickerItemStyle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.mutedText,
  },
  buttonSection: {
    marginVertical: 25,
  },
  button: {
    width: 373,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  },
  skipButton: {
    width: 373,
    height: 40,
    paddingHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  skipText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
});

AddPersonalDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddPersonalDetailScreen;
