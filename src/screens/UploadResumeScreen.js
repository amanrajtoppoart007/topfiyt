import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomStatusBar from '../components/CustomStatusBar';
import Colors from '../layout/Colors';
import Upload from '../assets/images/svg/upload.svg';
import BackButtonNavBar from '../components/BackButtonNavBar';
import Font from '../layout/Font';
class UploadResumeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.wrapper}>
          <View style={styles.marginVertical}>
            <Upload style={styles.introImage} />
          </View>
          <View style={styles.marginVertical}>
            <View style={styles.uploadBox}>
              <Text style={styles.uploadTitle}>
                Upload your resume Document here
              </Text>
            </View>
          </View>
          <View style={styles.marginVertical}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT & CONTINUE</Text>
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
    backgroundColor: Colors.white,
  },
  wrapper: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginVertical: {
    marginVertical: 15,
  },
  introImage: {
    width: 342,
    height: 210,
  },

  uploadBox: {
    width: 236,
    height: 236,
    borderWidth: 3,
    borderRadius: 1,
    borderColor: Colors.primary,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadTitle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
  button: {
    width: 171,
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
  },
});
UploadResumeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default UploadResumeScreen;
