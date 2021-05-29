import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import CardItem from '../components/MyJob/CardItem';
import Colors from '../layout/Colors';
import CustomStatusBar from '../components/CustomStatusBar';
import NavBar from '../components/NavBar';
import Font from '../layout/Font';
import Interview from "../components/MyJob/Interview";

class MyJobScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [
        {
          jobTitle: 'Actor',
          key: 'my-job-item-one',
          status: 'pending',
        },
        {
          jobTitle: 'Actress',
          key: 'my-job-item-two',
          status: 'selected',
        },
        {
          jobTitle: 'Director',
          key: 'my-job-item-three',
          status: 'rejected',
        },
        {
          jobTitle: 'Producer',
          key: 'my-job-item-four',
          status: 'pending',
        },
        {
          jobTitle: 'Set Designer',
          key: 'my-job-item-five',
          status: 'selected',
        },
        {
          jobTitle: 'Director of Photography',
          key: 'my-job-item-six',
          status: 'rejected',
        },
        {
          jobTitle: 'Costume Designer',
          key: 'my-job-item-seven',
          status: 'pending',
        },
        {
          jobTitle: 'Prop Master',
          key: 'my-job-item-eight',
          status: 'selected',
        },
        {
          jobTitle: 'Makeup Artist',
          key: 'my-job-item-nine',
          status: 'rejected',
        },
        {
          jobTitle: 'Movie Editor',
          key: 'my-job-item-ten',
          status: 'pending',
        },
        {
          jobTitle: 'Composer',
          key: 'my-job-item-eleven',
          status: 'selected',
        },
        {
          jobTitle: 'Art director',
          key: 'my-job-item-twelve',
          status: 'rejected',
        },
        {
          jobTitle: 'Assistant director',
          key: 'my-job-item-thirteen',
          status: 'pending',
        },
        {
          jobTitle: 'Best boy',
          key: 'my-job-item-fourteen',
          status: 'selected',
        },
        {
          jobTitle: 'Camera operator',
          key: 'my-job-item-fifteen',
          status: 'rejected',
        },
        {
          jobTitle: 'Cable person',
          key: 'my-job-item-sixteen',
          status: 'pending',
        },
      ],
      isInterviewModalVisible:false,
    };
  }

  toggleInterviewModal() {
    this.setState({
      isInterviewModalVisible: !this.state.isInterviewModalVisible,
    });
  }

  _renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 5}}>
        <CardItem
          toggleInterviewModal={() => this.toggleInterviewModal()}
          navigation={this.props.navigation}
          item={item}
        />
      </View>
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
            <View style={{marginVertical: 10}}>
              <Text style={styles.pageTitle}>My Jobs</Text>
            </View>
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={this.keyExtractor}
                data={this.state.agents}
                renderItem={this._renderItem}
              />
            </View>
          </View>
        </View>
        <Interview
          toggleInterviewModal={() => this.toggleInterviewModal()}
          isInterviewModalVisible={this.state.isInterviewModalVisible}
        />
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
  pageTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
});
export default MyJobScreen;
