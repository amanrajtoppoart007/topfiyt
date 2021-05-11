import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import Header from '../Header';
import JobCard from '../components/JobListing/JobCard';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import {Slider} from 'react-native-elements';
import JobListing from './JobListing/JobListing';
import Header from './Header';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class JobListFilter extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible}); 
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={{flex : 1}}>
          <Header/>
          <ScrollView>
              <JobCard/>
              <JobCard/>
              <JobCard/>
              <JobCard/>
              <JobCard/>
              <JobCard/>
          </ScrollView>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.closeView}>
                 <Icon style={styles.close} name="close"/>
                </View>
              <View>
                <Text style={styles.pickerText}>Job Type/Categories</Text>
                <DropDownPicker
                  placeholder="Enter your job type"
                  style={styles.DropDownPicker}
                  placeholderStyle={{
                    color: 'gray',
                    fontSize: 12,
                    fontFamily: Font.PoppinsLight,
                  }}
                />
              </View>
              <View style={styles.pickerView}>
                <Text style={styles.pickerText}>Location</Text>
                <DropDownPicker
                  placeholder="Enter your Location"
                  style={styles.DropDownPicker}
                  placeholderStyle={{
                    color: 'gray',
                    fontSize: 12,
                    fontFamily: Font.PoppinsLight,
                  }}
                />
              </View>
              <View style={styles.pickerView}>
                <Text style={styles.pickerText}>Experience</Text>
                <DropDownPicker
                  placeholder="Enter your Experience"
                  style={styles.DropDownPicker}
                  placeholderStyle={{
                    color: 'gray',
                    fontSize: 12,
                    fontFamily: Font.PoppinsLight,
                  }}
                />
              </View>

              <View style={styles.salaryView}>
                <View style={styles.salary}>
                  <Text style={{color : 'white', alignSelf : 'flex-start'}}>Salary</Text>
                </View>

                <View style={styles.minMax}>
                  <View >
                    <Text>Min.</Text>
                  </View>
                  <View>
                    <Text>Max.</Text>
                  </View>
                </View>

                {/* <View style={{flex: 1}}>
                    <Slider
                      thumbStyle={{
                        height: 80,
                        width: 150,
                        backgroundColor: 'transparent',
                      }}
                      maximumValue={50}
                      minimumValue={20}
                    />
                  </View> */}
              </View>

              <View style={styles.btns}>
                  <TouchableOpacity style={styles.clearParent}>
                      <Text style={styles.clearText}>CLEAR ALL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.applyParent}>
                      <Text style={styles.applyText}>APPLY</Text>
                  </TouchableOpacity>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
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
  modalView: {
    //   margin: 20,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    paddingTop: 20,
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
  closeView : {
      borderWidth : 1,
      borderRadius : 50,
      borderColor : 'white',
      position: 'relative',
      top : -18,
      left : '43%'
  },
  close : {
      color : 'white',
      fontSize : 20
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
      alignSelf : 'flex-start'
  },
  minMax: {
    // marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btns : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      marginTop : 20
  },
  clearParent : {
      padding : 7,
      backgroundColor : 'white',
      width : 84,
      height : 30,
      margin : 5
  },
  applyParent : {
      padding : 7,
      backgroundColor : 'white',
      width : 84,
      height : 30,
      margin : 5
  },
  clearText : {
      color : Colors.primary,
      fontFamily : Font.PoppinsLight,
      textAlign : 'center',
      fontSize : 13,
      backgroundColor : 'white',
    //   margin : 30,
    //   marginRight : 30
  },
  applyText : {
      color : Colors.primary,
      fontFamily : Font.PoppinsLight,
      textAlign : 'center',
      fontSize : 13,
      backgroundColor : 'white',
    //   margin : 30,
    //   marginLeft : 30
  },
});
