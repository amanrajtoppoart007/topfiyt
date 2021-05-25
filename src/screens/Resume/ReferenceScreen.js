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

class ReferenceScreen extends Component {
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
              <Text style={styles.pageTitle}>Reference</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Reference Name</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Reference Name'}
                    containerStyle={[styles.containerStyle, {width: 342}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Reference ID</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Reference ID'}
                    containerStyle={[styles.containerStyle, {width: 342}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Mobile No</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Mobile No'}
                    containerStyle={[styles.containerStyle, {width: 342}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Email Id</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Email Id'}
                    containerStyle={[styles.containerStyle, {width: 342}]}
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
                      this.props.navigation.navigate('Competences')
                    }
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Continue</Text>
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
    padding: 15,
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

ReferenceScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ReferenceScreen;
