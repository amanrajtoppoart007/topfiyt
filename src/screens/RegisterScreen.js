import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import {Input} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      remember: false,
      passwordSecureText: true,
      confirmPasswordSecureText: true,
    };
  }

  toggleSecureInput = input => {
    if (input === 'password') {
      this.setState({passwordSecureText: !this.state.passwordSecureText});
    } else if (input === 'confirmPassword') {
      this.setState({
        confirmPasswordSecureText: !this.state.confirmPasswordSecureText,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo/logo-with-title.png')}
            />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>SIGN UP</Text>
          </View>
          <View style={styles.subTitleWrapper}>
            <Text style={styles.subTitle}>
              Lorem Ipsum typesetting industry.
            </Text>
          </View>

          <View style={styles.inputBoxContainer}>
            <View style={styles.nameSection}>
              <View style={styles.nameInputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>First Name</Text>
                </View>
                <Input
                  leftIcon={() => (
                    <FontAwesome
                      style={{marginHorizontal: 10}}
                      name={'user-o'}
                      size={17}
                      color={Colors.primary}
                    />
                  )}
                  placeholder={'Your First Name'}
                  inputContainerStyle={styles.nameInputContainerStyle}
                  style={styles.nameInput}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>

              <View style={styles.nameInputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Last Name</Text>
                </View>
                <Input
                  leftIcon={() => (
                    <FontAwesome
                      style={{marginHorizontal: 10}}
                      name={'user-o'}
                      size={17}
                      color={Colors.primary}
                    />
                  )}
                  placeholder={'Your Last Name'}
                  inputContainerStyle={styles.nameInputContainerStyle}
                  style={styles.nameInput}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
            </View>

            <View style={styles.inputBox}>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Email</Text>
              </View>
              <Input
                leftIcon={() => (
                  <FontAwesome
                    style={{marginHorizontal: 10}}
                    name={'envelope-o'}
                    size={17}
                    color={Colors.primary}
                  />
                )}
                placeholder={'Enter your email'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.input}
                placeholderTextColor={Colors.mutedText}
              />
            </View>
            <View style={styles.inputBox}>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Password</Text>
              </View>
              <Input
                leftIcon={() => (
                  <Ionicons
                    style={{marginHorizontal: 10}}
                    name={'lock-closed-outline'}
                    size={17}
                    color={Colors.primary}
                  />
                )}
                rightIcon={() => (
                  <TouchableOpacity
                    onPress={() => this.toggleSecureInput('password')}
                    style={{marginHorizontal: 5}}>
                    <Ionicons
                      name={this.state.passwordSecureText ? 'eye' : 'eye-off'}
                      size={17}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                )}
                secureTextEntry={this.state.passwordSecureText}
                placeholder={'Enter you password'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.input}
                placeholderTextColor={Colors.mutedText}
              />
            </View>

            <View style={styles.inputBox}>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Confirm Password</Text>
              </View>
              <Input
                leftIcon={() => (
                  <Ionicons
                    style={{marginHorizontal: 10}}
                    name={'lock-closed-outline'}
                    size={17}
                    color={Colors.primary}
                  />
                )}
                rightIcon={() => (
                  <TouchableOpacity
                    onPress={() => this.toggleSecureInput('confirmPassword')}
                    style={{marginHorizontal: 5}}>
                    <Ionicons
                      name={
                        this.state.confirmPasswordSecureText ? 'eye' : 'eye-off'
                      }
                      size={17}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                )}
                secureTextEntry={this.state.confirmPasswordSecureText}
                placeholder={'Confirm Password'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.input}
                placeholderTextColor={Colors.mutedText}
              />
            </View>
          </View>
          <View style={styles.buttonSection}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddProfile')}
              style={styles.button}>
              <Text style={styles.buttonText}>SIGN UP & CONTINUE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomSection}>
            <Text style={styles.registerText}> Have an account ?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={[styles.registerText, {color: Colors.primaryLight}]}>
                Log In
              </Text>
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
    backgroundColor: Colors.primary,
  },
  wrapper: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 150,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
  },
  subTitleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
  inputBoxContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameInputBox: {
    marginVertical: 5,
    height: 65,
  },
  inputBox: {
    marginVertical: 5,
    height: 65,
  },
  labelWrapper: {
    marginBottom: 3,
    marginHorizontal: 10,
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
  nameInputContainerStyle: {
    width: 161,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  nameInput: {
    width: 161,
    height: 40,
    borderRadius: 5,
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
  },
  inputContainerStyle: {
    width: 342,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
  },
  input: {
    width: 342,
    height: 40,
    borderRadius: 5,
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
  },
  extraSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  text: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
    fontWeight: '400',
  },
  buttonSection: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  button: {
    width: 342,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  },
  separator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
  },
  socialButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  facebook: {
    color: Colors.facebook,
  },
  googlePlus: {
    color: Colors.googlePlus,
  },
  registerText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
    marginHorizontal: 3,
  },
  bottomSection: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

RegisterScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterScreen;
