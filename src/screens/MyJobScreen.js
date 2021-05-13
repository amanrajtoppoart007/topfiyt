import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import myjob from '../assets/images/logo/myjob.png'
import MainHeader from '../components/MainHeader';

export default class MyJob extends Component {
  render() {
    return (
      <View>
          <MainHeader/>

        <Text style={styles.myjobs}>My Jobs</Text>

        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <View style={styles.topContainer}>
              <Text style={styles.name}>ACTOR</Text>
              <Text style={styles.date}>Applied 22 April 2020</Text>
             
            </View>


            <View style={{flexDirection : 'row', alignItems : 'center'}}>
                <View style={{position: 'relative', top : 5, left : -5}} >
              <Image style={styles.myjob} source={myjob}/>
                </View>
            <TouchableOpacity style={styles.btnView}>
              <Text style={styles.btn}>SELECTED</Text>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.textView}>
            <Text style={styles.companyName}>COMPANY NAME</Text>
            <Text style={styles.paraText}>
              Lorem ipsum dolor sit amet, consetetur sadipcing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluqtua
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor : 'lightgray',
    //  flexDirection : 'row',
    justifyContent: 'space-between',
    marginHorizontal : 10
    //  height : '50%'
  },
  myjobs : {
      fontSize : 16,
      fontFamily : Font.PoppinsSemiBold,
      marginLeft : 10,
      marginVertical : 10
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 12,
    fontFamily : Font.PoppinsSemiBold,
    color : Colors.mutedText
  },
  date: {
    fontSize: 7,
    fontFamily : Font.PoppinsRegular,
    marginLeft: 10,
    color : Colors.mutedText,
  },
  
  myjob : {
    //   marginLeft : 4,
    //   marginTop : 2,
    // margin : 5
    // paddingTop : 8
  },
  btnView: {
    //  borderWidth : 1,
    // height : 26,
    // width : 86,
    marginTop: 5,
    marginRight: 2,
    backgroundColor: Colors.primary,
  },
  btn: {
    color: Colors.white,
    margin: 8,
    marginHorizontal: 18,
  },
  textView: {
    marginVertical: 10,
    marginHorizontal: 12,
  },
  companyName: {
    color: Colors.primary,
    fontFamily : Font.PoppinsRegular,
    fontSize : 10,
    marginTop: -18,
    marginBottom : 1
  },
  paraText : {
      fontSize : 10,
      letterSpacing : 0.5,
      fontFamily : Font.PoppinsRegular,
      color : Colors.mutedText
  }
});
