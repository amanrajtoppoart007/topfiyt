import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';
import {Input} from 'react-native-elements';

class ChangePasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View>
            <View style={{marginHorizontal: 5}}>
              <Text style={styles.pageTitle}>Reset Password</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Old Password</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Old Password'}
                    containerStyle={[styles.containerStyle, {width: 350}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>New Password</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'New Password'}
                    containerStyle={[styles.containerStyle, {width: 350}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Confirm Password</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Confirm Password'}
                    containerStyle={[styles.containerStyle, {width: 350}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(
                        'ResetPasswordConfirmation',
                      )
                    }
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Update Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  labelWrapper: {
    marginBottom: 3,
    marginHorizontal: 0,
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.black,
  },
  containerStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.mutedText,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.transparent,
  },
  inputBox: {
    marginVertical: 8,
    marginHorizontal: 3,
  },
  input: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
  },
  submitButton: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

ChangePasswordScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ChangePasswordScreen;
