import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import Success from '../../assets/images/svg/success.svg';

export default class ResetPasswordConfirmationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.center}>
            <Success width={150} height={150} />
          </View>
          <View style={styles.center}>
            <Text style={styles.successText}>SUCCESS !</Text>
          </View>
          <View style={[styles.center, styles.textWrapper]}>
            <Text style={styles.text}>
              You have successfully reset your password.
            </Text>
          </View>
          <View style={[styles.center, {marginTop: 20}]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    padding: 15,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontFamily: Font.PoppinsLight,
    fontSize: 25,
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  textWrapper: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.grayText,
    textAlign: 'center',
  },
  homeButton: {
    width: 160,
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
  },
});
