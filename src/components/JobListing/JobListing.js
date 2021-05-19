import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import JobSectionHeader from '../JobSectionHeader';
import JobCard from './JobCard';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import {Slider} from 'react-native-elements';

export default class JobListing extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <JobSectionHeader />
        <ScrollView>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    //   justifyContent: "center",
    alignItems: 'flex-end',
    marginTop: 32,
    //   marginLeft : 30
  },
  //   modal: {
  //     backgroundColor: Colors.primary,
  //   },
  modalView: {
    //   margin: 20,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    paddingTop: 35,
    width: 306,
    height: 347,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    display: 'none',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  pickerText: {
    fontSize: 14,
    color: 'white',
    fontFamily: Font.PoppinsRegular,
  },
  pickerView: {
    marginTop: 10,
  },
  DropDownPicker: {
    width: 264,
    borderRadius: 1,
    height: 35,
  },
  salaryView: {
    //   flexDirection : 'column',
    // borderWidth : 1
  },
  salary: {
    //   alignSelf : 'flex-start'
  },
  minMax: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
