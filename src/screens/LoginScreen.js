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
import {Input, CheckBox} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false,
      secureTextEntry: true,
    };
    this.passwordInput = React.createRef();
  }
  toggleSecureInput = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry});
    this.passwordInput.current.setNativeProps({
      inputStyle: styles.input,
    });
  };
  componentDidMount() {
    this.passwordInput.current.setNativeProps({
      inputStyle: styles.input,
    });
  }

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
            <Text style={styles.title}>LOGIN</Text>
          </View>
          <View style={styles.subTitleWrapper}>
            <Text style={styles.subTitle}>
              Lorem Ipsum typesetting industry.
            </Text>
          </View>
          <View style={styles.inputBoxContainer}>
            <KeyboardAvoidingView>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Email</Text>
                </View>
                <Input
                  multiline={false}
                  leftIcon={() => (
                    <FontAwesome
                      style={{marginLeft: 10}}
                      name={'envelope-o'}
                      size={18}
                      color={Colors.primary}
                    />
                  )}
                  placeholder={'Enter your email'}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={[styles.input, {paddingTop: 5}]}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Password</Text>
                </View>
                <Input
                  ref={this.passwordInput}
                  leftIcon={() => (
                    <Ionicons
                      style={{marginLeft: 10}}
                      name={'lock-closed-outline'}
                      size={18}
                      color={Colors.primary}
                    />
                  )}
                  rightIcon={() => (
                    <TouchableOpacity
                      onPress={() => this.toggleSecureInput()}
                      style={{marginHorizontal: 5}}>
                      <Ionicons
                        name={this.state.secureTextEntry ? 'eye' : 'eye-off'}
                        size={18}
                        color={Colors.primary}
                      />
                    </TouchableOpacity>
                  )}
                  secureTextEntry={this.state.secureTextEntry}
                  placeholder={'Enter you password'}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.extraSection}>
                <View>
                  <CheckBox
                    onPress={() =>
                      this.setState({remember: !this.state.remember})
                    }
                    containerStyle={styles.checkboxContainer}
                    uncheckedColor={Colors.primaryLight}
                    checkedColor={Colors.primaryLight}
                    textStyle={styles.text}
                    title="Remember me"
                    checked={this.state.remember}
                  />
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.text}>Forgot Password ?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.buttonSection}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MainStack')}
                style={styles.button}>
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separator}>
              <Text style={styles.separatorText}>- OR -</Text>
            </View>
            <View style={styles.socialButtonWrapper}>
              <View style={styles.socialButton}>
                <FontAwesome
                  name={'facebook'}
                  size={20}
                  style={styles.facebook}
                />
              </View>
              <View style={styles.socialButton}>
                <FontAwesome
                  name={'google-plus'}
                  size={20}
                  style={styles.googlePlus}
                />
              </View>
            </View>
            <View style={styles.registerSection}>
              <Text style={styles.registerText}>Don't have an account ? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text
                  style={[styles.registerText, {color: Colors.primaryLight}]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
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
    padding: 10,
  },
  inputBox: {
    height: 65,
    marginVertical: 15,
  },
  labelWrapper: {
    marginBottom: 5,
    marginHorizontal: 10,
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
  inputContainerStyle: {
    width: 342,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  input: {
    width: 342,
    height: 40,
    borderRadius: 5,
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: 'center',
  },
  extraSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    paddingRight: 10,
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
  registerSection: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
