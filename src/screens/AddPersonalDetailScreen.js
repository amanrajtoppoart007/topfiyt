import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from '../layout/Colors';

import Shapes from '../components/PersonalDetails/Shapes';
import Font from '../layout/Font';

import CountrySelect from '../components/CountrySelect';
import StateSelect from '../components/StateSelect';
import AddressTextArea from '../components/AddressTextArea';
import Layout from '../layout/Layout';

class AddPersonalDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Personal Details</Text>
            <Shapes width={174.95} height={16.02} />
          </View>
          <View style={styles.selectsWrapper}>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>Nationality</Text>
              </View>

              <CountrySelect
                containerStyle={{width: Layout.window.width * 0.43}}
              />
            </View>
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>State</Text>
              </View>

              <StateSelect
                containerStyle={{width: Layout.window.width * 0.43}}
              />
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Address</Text>
            </View>
            <AddressTextArea />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    padding: 20,
  },
  titleWrapper: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 20,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  selectsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
    fontWeight: 'bold',
  },
  labelWrapper: {
    marginVertical: 5,
  },
});

AddPersonalDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddPersonalDetailScreen;
