import React, {Component} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Divider, Input, Overlay, Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import Layout from '../../layout/Layout';
import User from '../../assets/images/svg/user.svg';
import Font from '../../layout/Font';
class CreatePost extends Component {
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
              <View style={styles.userInfo}>
                <View>
                  <User width={50} height={50} />
                </View>
                <View>
                  <Text style={styles.name}>Johnson</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.textAreaBox}>
                  <View style={styles.center}>
                    <Input
                      placeholder={"What's on your mind ?"}
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
                <Divider style={{backgroundColor: Colors.mutedText}} />
                <View style={styles.attachmentSection}>
                  <View style={{marginHorizontal: 3}}>
                    <Icon
                      style={styles.closeButtonText}
                      name="image"
                      type={'entypo'}
                      color={Colors.mutedText}
                    />
                  </View>
                  <View style={{marginHorizontal: 3}}>
                    <Icon
                      style={styles.closeButtonText}
                      name="ios-videocam-outline"
                      type={'ionicon'}
                      color={Colors.mutedText}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.postButtonContainer}>
              <Pressable
                onPress={() => this.toggleAddPostModal()}
                style={styles.postButton}>
                <Text style={styles.postButtonText}>Post Now</Text>
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
  textAreaBox: {
    marginVertical: 8,
    marginHorizontal: 3,
  },
  textAreaContainerStyle: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: Colors.transparent,
  },
  textArea: {
    borderWidth: 0,
    borderColor: Colors.transparent,
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
  },
  postButtonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  postButton: {
    width: 74,
    height: 24,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.white,
  },
});
export default CreatePost;
