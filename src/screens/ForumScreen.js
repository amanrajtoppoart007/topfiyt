import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import arrow from '../assets/images/logo/arrow.png';
import HeaderSearch from '../components/HeaderSearch';
import Colors from '../layout/Colors';
import Font from '../layout/Font';

export default class ForumScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderSearch navigation={this.props.navigation} />
        <View style={styles.header}>
          <View style={styles.upperLine}>
            <Text style={styles.community}>COMMUNITY</Text>
            <Image style={styles.arrow} source={arrow} />
            <Text style={styles.forum}>FORUM</Text>
          </View>

          <View style={styles.bottomLine}>
            <Text style={styles.bottomLineText}>Actors</Text>
            <Text style={styles.bottomLineText}>Films & Production</Text>
            <Text style={styles.bottomLineText}>Theatre Professional</Text>
          </View>
        </View>

        <View>
          <Text style={styles.discussions}>Recent Discussions</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginBottom: 200}}>
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.webinar}>
                    Webinar How to Promote Your Film
                  </Text>
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
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gray',
    // height: '100%',
  },
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    // flexDirection : 'row',
    // alignItems : 'center',
    // margin: 10,
  },
  upperLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 7,
  },
  community: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    marginLeft: 5,
  },
  arrow: {
    position: 'relative',
    top: -1,
    width: 18.08,
    height: 12.05,
    marginLeft: 10,
  },
  forum: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    marginLeft: 10,
  },
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  discussions: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    marginTop: 10,
    marginHorizontal: 15,
  },
  bottomLineText: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    marginHorizontal: 10,
    opacity: 0.6,
  },
  card: {
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
