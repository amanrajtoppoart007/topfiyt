import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import JobCard from '../components/JobListing/JobCard';

function JobSearchScreen() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </ScrollView>
    </View>
  );
}

export default JobSearchScreen;
