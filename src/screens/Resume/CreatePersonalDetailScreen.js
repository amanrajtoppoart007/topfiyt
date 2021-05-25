import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import {Input} from 'react-native-elements';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';

class CreatePersonalDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View>
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.pageTitle}>Personal Details</Text>
              </View>
              <View style={styles.inputSection}>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>First Name</Text>
                  </View>
                  <Input
                    placeholder={'Your First Name'}
                    containerStyle={[styles.containerStyle, {width: 165}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>

                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Last Name</Text>
                  </View>
                  <Input
                    placeholder={'Your Last Name'}
                    containerStyle={[styles.containerStyle, {width: 165}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Father Name</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Father Name'}
                    containerStyle={[styles.containerStyle, {width: 342}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputSection}>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Date</Text>
                  </View>
                  <Input
                    placeholder={'Date'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>

                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Month</Text>
                  </View>
                  <Input
                    placeholder={'Month'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Year</Text>
                  </View>
                  <Input
                    placeholder={'Year'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>

              <View style={styles.inputSection}>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Gender</Text>
                  </View>
                  <Input
                    placeholder={'Gender'}
                    containerStyle={[styles.containerStyle, {width: 165}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>

                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Marital Status</Text>
                  </View>
                  <Input
                    placeholder={'Marital Status'}
                    containerStyle={[styles.containerStyle, {width: 165}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>

              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Profession</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Profession'}
                    containerStyle={[styles.containerStyle, {width: 342}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>

              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Email</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Email'}
                    containerStyle={[styles.containerStyle, {width: 342}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>

              <View style={styles.inputSection}>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Phone No.</Text>
                  </View>
                  <Input
                    placeholder={'Phone Number'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>

                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>State</Text>
                  </View>
                  <Input
                    placeholder={'State'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>District</Text>
                  </View>
                  <Input
                    placeholder={'District'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={styles.inputSection}>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>City</Text>
                  </View>
                  <Input
                    placeholder={'City'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>

                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Street</Text>
                  </View>
                  <Input
                    placeholder={'Street'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
                <View style={styles.inputBox}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Pincode</Text>
                  </View>
                  <Input
                    placeholder={'Pincode'}
                    containerStyle={[styles.containerStyle, {width: 108}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
              </View>

              <View style={styles.textAreaBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Temporary Address</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Temporary Address'}
                    multiline={true}
                    maxLength={120}
                    style={styles.textArea}
                    inputContainerStyle={{
                      borderWidth: 0,
                      borderColor: Colors.transparent,
                    }}
                    containerStyle={styles.textAreaContainerStyle}
                  />
                </View>
              </View>

              <View style={styles.textAreaBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Current Address</Text>
                </View>
                <View style={styles.center}>
                  <Input
                    placeholder={'Current Address'}
                    multiline={true}
                    maxLength={120}
                    style={styles.textArea}
                    inputContainerStyle={{
                      borderWidth: 0,
                      borderColor: Colors.transparent,
                    }}
                    containerStyle={styles.textAreaContainerStyle}
                  />
                </View>
              </View>
              <View style={styles.inputBox}>
                <View style={styles.center}>
                  <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  textAreaBox: {
    marginVertical: 8,
    marginHorizontal: 3,
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
  textAreaContainerStyle: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.mutedText,
  },
  textArea: {
    borderWidth: 0,
    borderColor: Colors.transparent,
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

CreatePersonalDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CreatePersonalDetailScreen;
