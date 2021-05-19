import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import JobSectionHeader from '../components/JobSectionHeader';
import JobCard from '../components/JobListing/JobCard';
import Colors from '../layout/Colors';
class JobListingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          key: 'job-title-one',
          title: 'ACTOR',
          companyName: 'Company Name',
        },
        {
          key: 'job-title-two',
          title: 'CHILD ACTOR',
          companyName: 'Company Name',
        },
        {
          key: 'job-title-three',
          title: 'SUPPORTING ACTOR',
          companyName: 'Company Name',
        },
        {
          key: 'job-title-four',
          title: 'SPOT BOY',
          companyName: 'Company Name',
        },
        {
          key: 'job-title-five',
          title: 'WRITER',
          companyName: 'Company Name',
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <JobSectionHeader navigation={this.props.navigation} />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
              {this.state.jobs.map(item => {
                return (
                  <JobCard
                    navigation={this.props.navigation}
                    key={item.key}
                    item={item}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
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
});

export default JobListingScreen;
