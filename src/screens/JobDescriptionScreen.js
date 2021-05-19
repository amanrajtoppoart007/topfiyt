import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../layout/Colors';
import BackButtonNavBar from '../components/BackButtonNavBar';
import Font from '../layout/Font';
import CustomStatusBar from '../components/CustomStatusBar';
import SkillCheckBoxList from '../components/JobDescription/SkillCheckBoxList';
import Layout from '../layout/Layout';

class JobDescriptionScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <ImageBackground
          style={styles.bgImage}
          source={require('../assets/images/card-images/action.jpg')}>
          <View style={styles.jumboTronContent}>
            <Text style={styles.jumboTronText}>JOB TITLE WILL COME HERE</Text>
            <Text style={styles.brandText}>BRAND PVT. LTD.</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SubmissionConfirmation')
              }
              style={styles.applyNowButton}>
              <Text style={styles.applyNowButtonText}>Apply Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.wrapper}>
          <View style={styles.featureSection}>
            <View style={styles.featureButton}>
              <Text style={styles.featureButtonText}>Canada</Text>
            </View>
            <View style={styles.featureButton}>
              <Text style={styles.featureButtonText}>3-6 years</Text>
            </View>
            <View style={styles.featureButton}>
              <Text style={styles.featureButtonText}>1000k-1500k</Text>
            </View>
          </View>
          <View>
            <View style={{marginVertical: 5}}>
              <Text style={styles.title}>Job Description</Text>
            </View>
            <View style={{marginVertical: 5}}>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum
              </Text>
            </View>
            <View style={{marginVertical: 5}}>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </View>
            <View style={{marginVertical: 5}}>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </View>
          </View>
          <View>
            <View style={{marginVertical: 5}}>
              <Text style={styles.title}>Skills Required</Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SkillCheckBoxList />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    marginTop: 25,
    padding: 10,
    paddingTop: 0,
  },
  pageTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
  jumboTronText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 19,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  brandText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 8,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  bgImage: {
    alignSelf: 'center',
    width: Layout.window.width,
    height: 120,
  },
  jumboTronContent: {
    width: 375,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyNowButton: {
    width: 134,
    height: 37,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyNowButtonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 10,
    color: Colors.primary,
  },
  featureSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureButton: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.grayText,
  },
  featureButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.grayText,
    fontWeight: 'bold',
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.grayText,
    fontWeight: 'bold',
  },
  paragraph: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.black,
  },
});

JobDescriptionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default JobDescriptionScreen;
