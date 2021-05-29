import React, {Component} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Input, Overlay, Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import Layout from '../../layout/Layout';
import Font from '../../layout/Font';
class Interview extends Component {
  constructor(props) {
    super(props);
  }

  toggleInterviewModal() {
    this.props.toggleInterviewModal();
  }
  render() {
    return (
      <Overlay
        overlayStyle={{
          backgroundColor: Colors.transparent,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        fullScreen={true}
        isVisible={this.props.isInterviewModalVisible}
        onBackdropPress={() => this.toggleInterviewModal()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{paddingHorizontal: 20}}>
              <View>
                <View style={styles.closeButtonContainer}>
                  <View style={styles.closeButton}>
                    <Icon
                      style={styles.closeButtonText}
                      name="close"
                      type={'material'}
                      color={Colors.primary}
                      onPress={() => this.toggleInterviewModal()}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputBox}>
                <View style={{marginVertical: 3}}>
                  <Input
                    placeholder={'Meeting Id / Or Personal Link Name'}
                    containerStyle={[styles.containerStyle, {width: 360}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
                <View style={{marginVertical: 3}}>
                  <Input
                    placeholder={'Password'}
                    containerStyle={[styles.containerStyle, {width: 360}]}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.input}
                    placeholderTextColor={Colors.mutedText}
                  />
                </View>
                <View style={styles.meetingButtonContainer}>
                  <View style={{marginHorizontal: 3}}>
                    <Pressable
                      onPress={() => this.toggleInterviewModal()}
                      style={[
                        styles.meetingButton,
                        {
                          borderWidth: 1,
                          borderColor: Colors.primary,
                          backgroundColor: Colors.white,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.meetingButtonText,
                          {color: Colors.primary},
                        ]}>
                        Cancel
                      </Text>
                    </Pressable>
                  </View>
                  <View>
                    <Pressable
                      onPress={() => this.toggleInterviewModal()}
                      style={styles.meetingButton}>
                      <Text style={styles.meetingButtonText}>Join</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Overlay>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: Layout.window.width * 0.95,
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: Colors.transparent,
  },
  closeButton: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.primary,
  },
  closeButtonText: {
    color: Colors.primary,
    fontSize: 15,
  },
  name: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.black,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  attachmentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  card: {
    borderWidth: 0.5,
    borderColor: Colors.mutedText,
  },
  meetingButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  meetingButton: {
    width: 74,
    height: 24,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetingButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.white,
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
  labelWrapper: {
    marginBottom: 3,
    marginHorizontal: 10,
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
});
export default Interview;
