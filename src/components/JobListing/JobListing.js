import React, {Component} from 'react';
import {ScrollView, Text, View, Pressable, Modal, StyleSheet} from 'react-native';
import Header from '../Header';
import JobCard from './JobCard';

export default class JobListing extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={{flex: 1}}>
        <Header />
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
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
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
    //   justifyContent: "center",
      alignItems: "flex-end",
      marginTop: 32,
    //   marginLeft : 30
    },
    modalView: {
    //   margin: 20,
      backgroundColor: "white",
      borderRadius: 2,
      padding: 35,
      width : 306,
      height : 347,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
    display : 'none',
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });