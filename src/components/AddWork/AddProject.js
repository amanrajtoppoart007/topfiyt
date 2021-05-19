import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../layout/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Font from '../../layout/Font';
import {Input, Icon} from 'react-native-elements';

class AddProject extends Component {
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
            <View style={[styles.card, {marginBottom: 15}]}>
              {this.props.index !== 0 && (
                <View style={styles.closeButtonWrapper}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({visible: !this.state.visible})
                    }>
                    <Icon
                      name={'closecircleo'}
                      type={'ant-design'}
                      size={25}
                      color={Colors.white}
                    />
                  </TouchableOpacity>
                </View>
              )}

              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Project Name</Text>
                </View>
                <Input
                  placeholder={'Project Name'}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Role</Text>
                </View>
                <Input
                  placeholder={'Role'}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Add Videos </Text>
              </View>
              <View style={{marginHorizontal: 10}}>
                <View style={styles.button}>
                  <FontAwesome5
                    name={'plus'}
                    size={24}
                    color={Colors.mutedText}
                  />
                </View>
              </View>
              <View style={{marginBottom: 15}}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Add Photo</Text>
                </View>
                <View style={{marginHorizontal: 10}}>
                  <View style={styles.button}>
                    <FontAwesome5
                      name={'plus'}
                      size={24}
                      color={Colors.mutedText}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: Colors.white,
    padding: 3,
  },
  wrapper: {
    padding: 15,
  },
  inputBox: {
    marginVertical: 5,
    height: 65,
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
    fontSize: 10,
    color: Colors.primary,
    paddingHorizontal: 10,
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
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  closeButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

AddProject.propTypes = {};

export default AddProject;
