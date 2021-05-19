import React, {Component} from 'react';
import { Image, View, StyleSheet, SafeAreaView, FlatList, ScrollView } from "react-native";
import CardItem from '../components/News/CardItem';
import Colors from '../layout/Colors';
import CustomStatusBar from '../components/CustomStatusBar';
import NavBar from '../components/NavBar';
import Layout from "../layout/Layout";

class NewsListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-one',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-two',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-three',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-four',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-five',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-six',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-seven',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-eight',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-nine',
        },
        {
          title: 'What is Lorem Ipsum mean ',
          key: 'news-item-ten',
        },
        {
          title: 'News Eleven',
          key: 'news-item-eleven',
        },
        {
          title: 'News Twelve',
          key: 'news-item-twelve',
        },
        {
          title: 'News thirteen',
          key: 'news-item-thirteen',
        },
        {
          title: 'News fourteen',
          key: 'news-item-fourteen',
        },
        {
          title: 'News fifteen',
          key: 'news-item-fifteen',
        },
        {
          title: 'News Sixteen',
          key: 'news-item-sixteen',
        },
      ],
    };
  }

  _renderItem({item}) {
    return <CardItem item={item} />;
  }
  keyExtractor = item => item.key.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <NavBar navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.adWrapper}>
              <Image
                style={styles.adImage}
                source={require('../assets/images/news/ad.png')}
              />
            </View>
            <View>
              {this.state.news.map((item, index) => {
                return <CardItem key={index.toString()} item={item} />;
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.invertBackground,
  },
  content: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adWrapper: {
    width: Layout.window.width * 0.95,
  },
  adImage: {
    width: '100%',
    height: 60,
  },
});
export default NewsListScreen;
