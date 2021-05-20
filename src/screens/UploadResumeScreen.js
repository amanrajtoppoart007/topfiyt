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
import CustomStatusBar from '../components/CustomStatusBar';
import Colors from '../layout/Colors';
import Upload from '../assets/images/svg/upload.svg';
import BackButtonNavBar from '../components/BackButtonNavBar';
import Font from '../layout/Font';

class UploadResumeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'doc',
    };
  }
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
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.button}>
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
