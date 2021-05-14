import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../layout/Colors';

import User from '../../assets/images/svg/user.svg';
import Layout from '../../layout/Layout';
import Font from '../../layout/Font';
import CommentSection from './CommentSection';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      comment: false,
      share: false,
    };
  }

  like() {
    this.setState({like: !this.state.like});
  }
  share() {
    this.setState({share: !this.state.share});
  }
  comment() {
    this.setState({comment: !this.state.comment});
  }
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <User width={50} height={50} />
            </View>
            <View>
              <Text style={styles.author}>John Wick</Text>
              <Text style={styles.timeStamp}>10 Apr at 7:30 pm</Text>
            </View>
          </View>
          <View>
            <Text style={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type type and scrambled it to make a type specimen book.
            </Text>
            <Text style={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View style={styles.counterSection}>
            <View>
              <TouchableOpacity style={styles.counter}>
                <FontAwesome5
                  name={'thumbs-up'}
                  style={{marginHorizontal: 5}}
                  size={14}
                  color={Colors.primary}
                />
                <Text style={styles.counterText}>382k</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.comment()}
                style={styles.counter}>
                <Text style={styles.counterText}>452k</Text>
                <Text style={[styles.counterText, {marginHorizontal: 5}]}>
                  Comments
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonSection}>
            <View>
              <TouchableOpacity
                onPress={() => this.like()}
                style={styles.button}>
                <FontAwesome5
                  name={'thumbs-up'}
                  style={{marginHorizontal: 5}}
                  size={16}
                  color={this.state.like ? Colors.primary : Colors.black}
                />
                <Text
                  style={[
                    styles.buttonText,
                    {color: this.state.like ? Colors.primary : Colors.black},
                  ]}>
                  Like
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.comment()}
                style={styles.button}>
                <FontAwesome5
                  name={'comment-alt'}
                  style={{marginHorizontal: 5}}
                  size={16}
                  color={this.state.comment ? Colors.primary : Colors.black}
                />
                <Text
                  style={[
                    styles.buttonText,
                    {color: this.state.comment ? Colors.primary : Colors.black},
                  ]}>
                  Comment
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.share()}
                style={styles.button}>
                <AntDesign
                  name={'sharealt'}
                  style={{marginHorizontal: 5}}
                  size={16}
                  color={this.state.share ? Colors.primary : Colors.black}
                />
                <Text
                  style={[
                    styles.buttonText,
                    {color: this.state.share ? Colors.primary : Colors.black},
                  ]}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.state.comment && <CommentSection />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: Layout.window.width * 0.95,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.grayText,
    padding: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.black,
    fontWeight: 'bold',
  },
  timeStamp: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 8,
    color: Colors.mutedText,
  },
  content: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.grayText,
    lineHeight: 18,
    textAlign: 'left',
  },
  counterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: Colors.mutedText,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.black,
  },
});
PostCard.propTypes = {};

export default PostCard;
