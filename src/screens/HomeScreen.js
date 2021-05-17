import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from '../layout/Colors';

import PostCard from '../components/Home/PostCard';
import MainHeader from '../components/MainHeader';
import CustomStatusBar from '../components/CustomStatusBar';
import Font from '../layout/Font';
import SearchBox from '../components/Home/SearchBox';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          key: 'job-item-one',
        },
        {
          key: 'job-item-two',
        },
        {
          key: 'job-item-three',
        },
        {
          key: 'job-item-four',
        },
        {
          key: 'job-item-five',
        },
        {
          key: 'job-item-six',
        },
      ],
    };
  }
  _renderItem = item => {
    return <PostCard item={item} />;
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <MainHeader navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.wrapper}>
            <View>
              <SearchBox />
              <View style={{marginVertical: 8, marginHorizontal: 8}}>
                <Text style={styles.pageTitle}>Recent Post</Text>
              </View>
              <View>
                {this.state.jobs.map(() => {
                  return (
                    <View style={{marginVertical: 8}}>
                      <PostCard />
                    </View>
                  );
                })}
              </View>
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
    backgroundColor: Colors.white,
  },
  wrapper: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 14,
    color: Colors.black,
    fontWeight: 'bold',
  },
});
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
