import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageNavBar from '../components/ImageNavBar';
import action from '../assets/images/card-images/action.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import greenDot from '../assets/images/logo/greenDot.png';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import Layout from '../layout/Layout';

class ApplyNowScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageNavBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground style={styles.action} source={action}>
            <View style={styles.jumboTronContent}>
              <Text style={styles.jumboTronText}>JOB TITLE WILL COME HERE</Text>
              <Text style={styles.brandText}>BRAND PVT. LTD.</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FavoriteJob')}
                style={styles.applyNowButton}>
                <Text style={styles.applyNowButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.wrapper}>
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <Icon style={styles.icon} name="location-on" />
                <Text style={styles.iconText}>Canada</Text>
              </View>
              <View style={styles.btn}>
                <Icon style={styles.icon} name="location-on" />
                <Text style={styles.iconText}>3-6 years</Text>
              </View>
              <View style={styles.btn}>
                <Icon style={styles.icon} name="location-on" />
                <Text style={styles.iconText}>1000k - 1500k</Text>
              </View>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.jobDesc}>Job Description</Text>
              <Text style={styles.paraText}>
                Lorem ipsum dolor sit amet, consetetur sadipcing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluqtua. At vero eos et accusam et justo duo
                dolorea et ea rebum
              </Text>
              <Text style={styles.paraText}>
                Lorem ipsum dolor sit amet, consetetur sadipcing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluqtua. At vero eos et accusam et justo duo
                dolorea et ea rebum
              </Text>
              <Text style={styles.paraText}>
                Lorem ipsum dolor sit amet, consetetur sadipcing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluqtua. At vero eos et accusam et justo duo
                dolorea et ea rebum Lorem ipsum dolor sit amet, consetetur
                sadipcing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluqtua. At vero
                eos et accusam et justo duo dolorea et ea rebum
              </Text>
            </View>

            <View style={{marginLeft: 12}}>
              <Text style={styles.skillsText}>Skills Required</Text>

              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
                <View style={styles.dot}>
                  <Image style={{marginTop: 2}} source={greenDot} />
                  <Text>Skill Set 1</Text>
                </View>
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
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jumboTronText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 19,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  brandText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 8,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    alignSelf: 'center',
    marginTop: 2,
    height: 40,
    width: 30,
  },
  action: {
    alignSelf: 'center',
    marginTop: 2,
    height: 120,
    width: Layout.window.width,
    backgroundColor: 'rgba(0,0,0,0.93)',
    marginBottom: 30,
  },
  jumboTronContent: {
    width: 375,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyNowButton: {
    width: 134,
    height: 37,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyNowButtonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 10,
    color: Colors.white,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    width: 107,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 5,
    opacity: 0.7,
  },
  iconText: {
    textAlign: 'center',
    fontSize: 13,
    opacity: 0.9,
  },
  jobDesc: {
    fontSize: 15,
    marginLeft: 14,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 7,
    opacity: 0.8,
  },
  paraText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.black,
  },
  skillsText: {
    opacity: 0.9,
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
  dot: {
    flexDirection: 'row',
  },
});
ApplyNowScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ApplyNowScreen;
