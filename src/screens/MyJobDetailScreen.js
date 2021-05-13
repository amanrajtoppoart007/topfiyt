import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Colors from '../layout/Colors';
import BackButtonNavBar from '../components/BackButtonNavBar';
import Font from '../layout/Font';
import CustomStatusBar from '../components/CustomStatusBar';
import SkillCheckBoxList from '../components/JobDescription/SkillCheckBoxList';

class MyJobDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.pageTitle}>My Jobs</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <View style={[styles.button, {backgroundColor: Colors.warning}]}>
              <Text style={styles.buttonText}>PENDING</Text>
            </View>
            <View style={[styles.button, {backgroundColor: Colors.lightCyan}]}>
              <Text style={styles.buttonText}>SELECTED</Text>
            </View>
            <View style={[styles.button, {backgroundColor: Colors.danger}]}>
              <Text style={styles.buttonText}>REJECTED</Text>
            </View>
          </View>
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
                marginVertical: 15,
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
    padding: 15,
  },
  pageTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
    color: Colors.grayText,
  },
});

MyJobDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyJobDetailScreen;
