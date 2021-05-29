import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import Layout from '../../layout/Layout';
class CardItem extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.webinar}>Webinar How to Promote Your Film</Text>
          <Text style={styles.time}>05:34 pm</Text>
        </View>

        <View style={styles.cardBody}>
          <View style={{marginLeft: 7}}>
            <Text style={styles.cardForum}>Posted in Forum</Text>
            <Text style={styles.generalChat}>General Chat</Text>
          </View>
          <TouchableOpacity style={styles.postParent}>
            <Text style={styles.post}>See Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: Layout.window.width * 0.95,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    margin: 10,
    marginVertical: 5,
    shadowColor: Colors.black,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  webinar: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
    width: 160,
    marginVertical: 5,
  },
  time: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    marginVertical: 5,
    opacity: 0.5,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingBottom: 10,
    marginTop: 5,
  },
  cardForum: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.primary,
  },
  generalChat: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
  },
  postParent: {
    justifyContent: 'center',
    borderWidth: 0.7,
    borderRadius: 5,
    borderColor: Colors.primary,
  },
  post: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.primary,
    textAlign: 'center',
    marginHorizontal: 14,
    paddingVertical: -5,
  },
});
CardItem.propTypes = {};

export default CardItem;
