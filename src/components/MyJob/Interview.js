import React, {Component} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Divider, Input, Overlay, Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import Layout from '../../layout/Layout';
import Font from '../../layout/Font';
class Interview extends Component {
  constructor(props) {
    super(props);
  }

  toggleAddPostModal() {
    this.props.toggleAddPostModal();
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
        isVisible={this.props.isAddPostVisible}
        onBackdropPress={() => this.toggleAddPostModal()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <View style={styles.closeButtonContainer}>
                <View style={styles.closeButton}>
                  <Icon
                    style={styles.closeButtonText}
                    name="close"
                    type={'material'}
                    color={Colors.primary}
                    onPress={() => this.toggleAddPostModal()}
                  />
                </View>
              </View>
            </View>
            <View style={styles.meetingButtonContainer}>
              <Pressable
                onPress={() => this.toggleAddPostModal()}
                style={styles.meetingButton}>
                <Text style={styles.meetingButtonText}>Post Now</Text>
              </Pressable>
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
    width: Layout.window.width * 0.98,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonContainer: {
    width: Layout.window.width * 0.95,
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
    fontSize: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
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
});
export default Interview;
