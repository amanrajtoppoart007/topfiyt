import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControlBase,
} from 'react-native';
import Colors from '../layout/Colors';
import details from '../assets/images/profile/details.png';
import competences from '../assets/images/profile/competences.png';
import education from '../assets/images/profile/education.png';
import experience from '../assets/images/profile/experience.png';
import objective from '../assets/images/profile/objective.png';
import preferences from '../assets/images/profile/preferences.png';
import projects from '../assets/images/profile/projects.png';
import reference from '../assets/images/profile/reference.png';
import skills from '../assets/images/profile/skills.png';
import Font from '../layout/Font';
import MainHeader from '../components/MainHeader';
import BackButtonNavBar from '../components/BackButtonNavBar';

export default class ResumeScreen extends Component {
  render() {
    return (
      <View>
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.header}>
          <Text style={styles.profile}>PROFILE</Text>
        </View>

        <View style={styles.wholeContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Image source={details} />
              <Text style={styles.personalText}>Personal Details</Text>
            </View>
            <View style={styles.box}>
              <Image source={education} />
              <Text style={styles.text}>Education</Text>
            </View>
            <View style={styles.box}>
              <Image source={experience} />
              <Text style={styles.text}>Experience</Text>
            </View>
            <View style={styles.box}>
              <Image source={skills} />
              <Text style={styles.text}>Skills</Text>
            </View>
            <View style={styles.box}>
              <Image source={objective} />
              <Text style={styles.text}>Objective</Text>
            </View>
            <View style={styles.box}>
              <Image source={reference} />
              <Text style={styles.text}>Reference</Text>
            </View>
          </View>

          <Text style={styles.more}>More Sections</Text>

          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Image source={projects} />
              <Text style={styles.text}>Projects</Text>
            </View>
            <View style={styles.box}>
              <Image source={competences} />
              <Text style={styles.text}>Competences</Text>
            </View>
            <View style={styles.box}>
              <Image source={preferences} />
              <Text style={styles.text}>Preferences</Text>
            </View>
          </View>
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    height: '35%',
  },
  profile: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    fontSize: 18,
    margin: 10,
  },
  wholeContainer: {
    position: 'absolute',
    top: '35%',
    zIndex: 1,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: 102,
    height: 102,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 15,
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,
    // elevation: 9,
  },
  text: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    marginTop: 10,
  },
  personalText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    marginTop: 10,
    // width : 60,
    // textAlign : 'center'
  },
  more: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    margin: 5,
    marginLeft: 20,
  },
  submit: {
    justifyContent: 'center',
    // borderWidth : 1,
    backgroundColor: Colors.primary,
    marginHorizontal: 14,
    height: 40,
  },
  submitText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    marginTop: 3,
  },
});
