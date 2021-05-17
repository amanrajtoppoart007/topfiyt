import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Colors from '../../layout/Colors';

import User from '../../assets/images/svg/user.svg';
import Font from '../../layout/Font';
import {Input} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Layout from '../../layout/Layout';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      comment: null,
    };
  }

  render() {
    return (
      <View>
        <View style={styles.commentWrapper}>
          <User width={50} height={50} />
          <View>
            <View style={styles.comment}>
              <Text style={styles.user}>Johnson</Text>
              <Text style={styles.commentText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
            <View>
              <Text style={styles.like}>Like</Text>
            </View>
          </View>
        </View>

        <View style={styles.commentBox}>
          <User width={50} height={50} />
          <View style={styles.inputContainerStyle}>
            <TextInput
              placeholder={'Write a comment...'}
              style={styles.input}
              placeholderTextColor={Colors.mutedText}
            />
            <View style={styles.inputHelperIconContainer}>
              <Ionicons
                style={{marginLeft: 10}}
                name={'ios-camera-outline'}
                size={17}
                color={Colors.black}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  commentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 8,
  },
  comment: {
    width: 317,
    height: 46,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.grayText,
    padding: 8,
  },
  user: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 9,
    color: Colors.black,
    fontWeight: 'bold',
  },
  commentText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 7,
    color: Colors.black,
    lineHeight: 12,
  },
  like: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 10,
    color: Colors.primary,
  },
  commentBox: {
    width: Layout.window.width,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    width: 318,
    height: 46,
    borderRadius: 50,
    backgroundColor: Colors.grayBg,
    borderBottomWidth: 0,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 46,
    fontFamily: Font.PoppinsRegular,
    fontSize: 7,
    color: Colors.grayText,
  },
  inputHelperIconContainer: {
    width: '10%',
  },
});
CommentSection.propTypes = {};

export default CommentSection;
