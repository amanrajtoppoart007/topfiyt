import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BackButtonNavBar from '../components/BackButtonNavBar';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import news_screen from '../assets/images/card-images/news-screen.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NewsScreen extends Component {
  render() {
    return (
      <View>
        <BackButtonNavBar navigation={this.props.navigation} />

        <View style={styles.header}>
          <Text style={styles.trendingText}>Trending News</Text>
          <Text style={styles.headerText}>New</Text>
          <Text style={styles.headerText}>Top Posts</Text>
          <Text style={styles.headerText}>All the time</Text>
        </View>

        <View style={styles.card}>
          <View>
            <Image style={styles.news_screen} source={news_screen} />
          </View>

          <View style={styles.cardHeader}>
            <Text style={styles.text}>What is lorem ipsum mean</Text>
            <Text style={styles.text2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy
            </Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.seemoreView}>
                <Text style={styles.seemore}>see more</Text>
                <Icon style={styles.east} name="east" />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.time}>5 min ago</Text>
                <View style={styles.visibilityView}>
                  <Icon style={styles.visibility} name="visibility" />
                  <Text style={styles.noOfViews}>245k</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    marginVertical: 10,
    marginLeft: 15,
  },
  news_screen: {
    width: 129,
    height: 59,
    borderRadius: 10,
    marginTop: 5,
    // paddingTop : 20
    // margin : 5
  },
  trendingText: {
    color: Colors.primary,
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    marginVertical: 10,
    marginLeft: 15,
  },
  card: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.lightgray,
  },
  text: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    marginLeft: 10,
  },
  text2: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 8,
    width: 200,
  },
  seemoreView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seemore: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 6,
    marginRight: 5,
    color: Colors.primary,
  },
  east: {
    fontSize: 9,
    color: Colors.primary,
  },
  time: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 6,
    marginRight: 5,
  },
  visibilityView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  visibility: {
    fontSize: 10,
    marginRight: 5,
  },
  noOfViews: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 6,
  },
});
