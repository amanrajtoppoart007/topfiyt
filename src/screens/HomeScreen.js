import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import Colors from '../layout/Colors';

import PostCard from '../components/Home/PostCard';
import MainHeader from '../components/MainHeader';
import CustomStatusBar from '../components/CustomStatusBar';
import Font from '../layout/Font';
import SearchBox from '../components/Home/SearchBox';
import {FAB} from 'react-native-elements';
import CreatePost from '../components/Home/CreatePost';

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
      isAddPostVisible: false,
    };
  }

  toggleAddPostModal() {
    this.setState({isAddPostVisible: !this.state.isAddPostVisible});
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
              <Pressable onPress={() => this.toggleAddPostModal()}>
                <SearchBox editable={false} />
              </Pressable>
              <View style={{marginVertical: 8, marginHorizontal: 8}}>
                <Text style={styles.pageTitle}>Recent Post</Text>
              </View>
              <View>
                {this.state.jobs.map((item, index) => {
                  return (
                    <View key={index.toString()} style={{marginVertical: 8}}>
                      <PostCard />
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
        <FAB
          onPress={() => this.props.navigation.navigate('JobSection')}
          title={'Jobs'}
          size={'large'}
          titleStyle={styles.floatingButtonTextStyle}
          style={styles.floatingButtonStyle}
          containerStyle={styles.floatingButtonStyle}
          placement={'right'}
          color={Colors.primary}
        />
        <CreatePost
          toggleAddPostModal={() => this.toggleAddPostModal()}
          isAddPostVisible={this.state.isAddPostVisible}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  floatingButtonStyle: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  floatingButtonTextStyle: {
    width: 40,
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    alignSelf: 'center',
    marginLeft: 20,
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
