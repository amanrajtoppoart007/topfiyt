import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Pressable} from 'react-native';
import CardItem from '../components/News/CardItem';
import Colors from '../layout/Colors';
import CustomStatusBar from '../components/CustomStatusBar';
import NavBar from '../components/NavBar';
import Layout from '../layout/Layout';
import {TabView} from 'react-native-tab-view';
import Font from '../layout/Font';
import TabItem from '../components/News/TabItem';

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
      routes: [
        {
          key: 'first',
          name: 'Trending News',
          selected: true,
        },
        {
          key: 'second',
          name: ' New',
          selected: false,
        },
        {
          key: 'third',
          name: 'Top Posts',
          selected: false,
        },
        {
          key: 'fourth',
          name: 'All the time',
          selected: false,
        },
      ],
      index: 0,
    };
  }

  _handleIndexChange = index => this.setState({index});
  _renderScene = ({route}) => {
    switch (route.key) {
      default:
      case 'first':
      case 'second':
      case 'third':
      case 'fourth':
        return <TabItem news={this.state.news} />;
    }
  };

  check = i => {
    this.setState(state => {
      const routes = state.routes.map((item, j) => {
        if (j === i) {
          return {...item, selected: true};
        } else {
          return {...item, selected: false};
        }
      });

      return {
        routes,
      };
    });
  };

  select = i => {
    this.setState({index: i});
    this.check(i);
  };

  _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <Pressable
              key={i.toString()}
              style={styles.tabItem}
              onPress={() => this.select(i)}>
              <Text
                style={[
                  styles.title,
                  {color: route.selected ? Colors.primary : Colors.mutedText},
                ]}>
                {route.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  _renderItem({item}) {
    return <CardItem item={item} />;
  }
  keyExtractor = item => item.key.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <NavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View>
            <View style={styles.tabContainer}>
              <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={{
                  width: Layout.window.width,
                }}
                sceneContainerStyle={styles.sceneContainerStyle}
                style={styles.tabViewStyle}
              />
            </View>
          </View>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabViewStyle: {
    width: Layout.window.width,
    padding: 0,
    margin: 0,
  },
  sceneContainerStyle: {
    width: Layout.window.width,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.mutedText,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  tab: {},
  tabItem: {
    marginHorizontal: 5,
  },
  textWrapper: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
export default NewsListScreen;
