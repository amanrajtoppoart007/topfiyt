import React from 'react';
import {ScrollView, View} from 'react-native';
import JobSectionHeader from '../components/JobSectionHeader';
import JobCard from '../components/JobListing/JobCard';

function JobSearchScreen() {
  return (
    <View style={{flex: 1}}>
      <JobSectionHeader />
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
