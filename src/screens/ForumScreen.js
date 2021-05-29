import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Pressable} from 'react-native';
import Colors from '../layout/Colors';
import CustomStatusBar from '../components/CustomStatusBar';
import NavBar from '../components/NavBar';
import Layout from '../layout/Layout';
import {TabView, TabBar} from 'react-native-tab-view';
import Font from '../layout/Font';
import TabItem from '../components/Forum/TabItem';
import Arrow from '../assets/images/icons/arrow.svg';

class ForumScreen extends Component {
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
          title: 'Actors',
          selected: true,
        },
        {
          key: 'second',
          title: ' Films & Production',
          selected: false,
        },
        {
          key: 'third',
          title: 'Theatre Professional',
          selected: false,
        },
        {
          key: 'fourth',
          title: 'Singing',
          selected: false,
        },
        {
          key: 'fifth',
          title: 'Dancing',
          selected: false,
        },
        {
          key: 'sixth',
          title: 'Drama',
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
      case 'fifth':
      case 'sixth':
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
      <TabBar
        getAccessibilityLabel={({route}) => route.accessibilityLabel}
        renderLabel={({route, focused, color}) => (
          <Text style={{color, margin: 8}}>{route.title}</Text>
        )}
      />
    );
  };
  keyExtractor = item => item.key.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <NavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View>
            <View>
              <View style={styles.header}>
                <View style={styles.pageTitleWrapper}>
                  <View style={{marginHorizontal: 3}}>
                    <Text style={styles.pageTitle}>COMMUNITY</Text>
                  </View>
                  <View style={{marginHorizontal: 3}}>
                    <Arrow width={20} height={15} />
                  </View>
                  <View style={{marginHorizontal: 3}}>
                    <Text style={styles.pageTitle}>FORUM</Text>
                  </View>
                </View>
              </View>
              <TabView
                swipeEnabled={false}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={props => (
                  <TabBar
                    scrollEnabled={true}
                    tabStyle={{
                      width: Layout.window.width * 0.45,
                      height: 50,
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                    indicatorStyle={{backgroundColor: Colors.primaryLight}}
                    renderLabel={({route, focused, color}) => (
                      <Text style={styles.title}>{route.title}</Text>
                    )}
                    style={{backgroundColor: Colors.primary}}
                    {...props}
                  />
                )}
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
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  pageTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 14,
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    fontWeight: 'bold',
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
    fontSize: 14,
    color: Colors.white,
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
export default ForumScreen;
