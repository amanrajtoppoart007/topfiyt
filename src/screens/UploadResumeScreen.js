import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';

import CustomStatusBar from '../components/CustomStatusBar';
import Colors from '../layout/Colors';
import Upload from '../assets/images/svg/upload.svg';
import Font from '../layout/Font';
import OnlyBackButtonNavBar from '../components/OnlyBackIconNavBar';

class UploadResumeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'doc',
      showAlert: false,
    };
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
    setTimeout(() => {
      this.props.navigation.navigate('MemberShipUpgrade');
    }, 6000);
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  render() {
    const {showAlert} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <OnlyBackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.wrapper}>
          <View style={styles.marginVertical}>
            <Upload style={styles.introImage} />
          </View>
          <View style={styles.marginVertical}>
            <View style={styles.center}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={[
                    styles.helperText,
                    {
                      color:
                        this.state.checked === 'doc'
                          ? Colors.primary
                          : Colors.mutedText,
                    },
                  ]}>
                  Max (5MB)
                </Text>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  title={'Upload Doc.'}
                  checkedColor={Colors.primary}
                  uncheckedColor={Colors.primary}
                  checked={this.state.checked === 'doc'}
                  onPress={() => this.setState({checked: 'doc'})}
                  containerStyle={styles.checkboxContainerStyle}
                />
              </View>
              <View>
                <Text
                  style={[
                    styles.helperText,
                    {
                      color:
                        this.state.checked === 'video'
                          ? Colors.primary
                          : Colors.mutedText,
                    },
                  ]}>
                  Max (5MB)
                </Text>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  title={'Upload Video'}
                  checkedColor={Colors.primary}
                  uncheckedColor={Colors.primary}
                  checked={this.state.checked === 'video'}
                  onPress={() => this.setState({checked: 'video'})}
                  containerStyle={styles.checkboxContainerStyle}
                />
              </View>
            </View>
          </View>
          <View style={styles.marginVertical}>
            <View style={styles.uploadBox}>
              <Text style={styles.uploadTitle}>
                Upload your resume Document here
              </Text>
            </View>
          </View>
          <View style={styles.marginVertical}>
            <TouchableOpacity
              onPress={() => this.showAlert()}
              style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT & CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Success!"
          message="Thanks For Registering"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={false}
          contentContainerStyle={styles.alertContentContainerStyle}
          titleStyle={styles.alertTitleStyle}
          messageStyle={styles.alertMessageStyle}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  alertContentContainerStyle: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertTitleStyle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 25,
    color: Colors.white,
  },
  alertMessageStyle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 18,
    color: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  helperText: {
    alignSelf: 'flex-end',
    fontFamily: Font.PoppinsRegular,
    fontSize: 8,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginVertical: {
    marginVertical: 10,
  },
  introImage: {
    width: 300,
    height: 200,
  },
  checkboxContainerStyle: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
    margin: 0,
    padding: 0,
  },
  uploadBox: {
    width: 220,
    height: 200,
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
    width: 185,
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
