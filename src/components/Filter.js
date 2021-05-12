import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Font from '../layout/Font';
import Colors from '../layout/Colors';
import {Picker} from '@react-native-picker/picker';
import CustomRangeSlider from './RangeSlider/CustomRangeSlider';
class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <View style={styles.closeButtonContainer}>
              <View style={styles.closeButton}>
                <Icon
                  style={styles.closeButtonText}
                  name="close"
                  onPress={() => this.props.toggleFilter()}
                />
              </View>
            </View>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Job Type/Categories</Text>
              </View>
              <View style={styles.pickerContainerStyle}>
                <Picker
                  style={styles.pickerStyle}
                  itemStyle={styles.pickerItemStyle}>
                  <Picker.Item label="Enter your job type" value="" />
                  <Picker.Item label="Actor" value="actor" />
                  <Picker.Item label="Singer" value="singer" />
                  <Picker.Item label="Dancer" value="dancer" />
                </Picker>
              </View>
            </View>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Location</Text>
              </View>
              <View style={styles.pickerContainerStyle}>
                <Picker
                  style={styles.pickerStyle}
                  itemStyle={styles.pickerItemStyle}>
                  <Picker.Item label="Enter your Location" value="" />
                  <Picker.Item label="Delhi" value="delhi" />
                  <Picker.Item label="Mumbai" value="mumbai" />
                  <Picker.Item label="Goa" value="goa" />
                </Picker>
              </View>
            </View>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Experience</Text>
              </View>
              <View style={styles.pickerContainerStyle}>
                <Picker
                  style={styles.pickerStyle}
                  itemStyle={styles.pickerItemStyle}>
                  <Picker.Item label="Enter your Experience" value="" />
                  <Picker.Item label="1 Year" value="one_year" />
                  <Picker.Item label="2 Year" value="two_year" />
                  <Picker.Item label="3 Year" value="three_year" />
                </Picker>
              </View>
            </View>
            <View>
              <View style={{marginVertical: 5}}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Salary</Text>
                </View>
                <View>
                  <CustomRangeSlider />
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <View style={{marginHorizontal: 5}}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>CLEAR ALL</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginHorizontal: 5}}>
                <TouchableOpacity
                  onPress={() => this.props.toggleFilter()}
                  style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>APPLY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 320,
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonContainer: {
    width: 280,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: Colors.transparent,
  },
  closeButton: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.white,
  },
  closeButtonText: {
    color: Colors.white,
    fontSize: 20,
  },
  button: {
    display: 'none',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
  },
  labelWrapper: {
    marginVertical: 5,
  },
  pickerContainerStyle: {
    width: 280,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerStyle: {
    width: 280,
    height: 35,
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.mutedText,
  },
  pickerItemStyle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.mutedText,
  },
  salaryView: {},
  salary: {
    alignSelf: 'flex-start',
  },
  minMax: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButton: {
    backgroundColor: Colors.white,
    width: 84,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: Colors.primary,
    fontFamily: Font.PoppinsRegular,
    fontSize: 13,
  },
});
export default Filter;
