import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.visible && (
          <View>
            {this.props.index !== 0 && (
              <View style={styles.closeButtonWrapper}>
                <TouchableOpacity
                  onPress={() => this.setState({visible: !this.state.visible})}>
                  <Icon
                    name={'closecircleo'}
                    type={'ant-design'}
                    size={25}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.inputSection}>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Job Title</Text>
                </View>
                <Input
                  placeholder={'Job Title'}
                  containerStyle={[styles.containerStyle, {width: 165}]}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>

              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Employer</Text>
                </View>
                <Input
                  placeholder={'Employer'}
                  containerStyle={[styles.containerStyle, {width: 165}]}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
            </View>
            <View style={styles.inputSection}>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Start Date</Text>
                </View>
                <Input
                  placeholder={'Start Date'}
                  containerStyle={[styles.containerStyle, {width: 165}]}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>

              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>End Date</Text>
                </View>
                <Input
                  placeholder={'End Date'}
                  containerStyle={[styles.containerStyle, {width: 165}]}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
            </View>

            <View style={styles.inputSection}>
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
                <Text style={styles.label}>Job Description</Text>
              </View>
              <View style={styles.center}>
                <Input
                  placeholder={'Job Description'}
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
          </View>
        )}
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  closeButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
  addMoreButton: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addMoreButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.primary,
  },
});
Card.propTypes = {};

export default Card;
