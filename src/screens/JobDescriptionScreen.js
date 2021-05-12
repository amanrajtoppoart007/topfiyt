import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Colors from '../layout/Colors';
import action from '../assets/images/card-images/action.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import greenDot from '../assets/images/logo/greenDot.png';
import ImageNavBar from '../components/ImageNavBar';
import Font from '../layout/Font';

export default class JobDescriptionScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageNavBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <ImageBackground style={styles.action} source={action}>
              <View style={styles.jumboTronContent}>
                <Text style={styles.jumboTronText}>
                  JOB TITLE WILL COME HERE
                </Text>
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
                sadipcing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluqtua. At vero eos et
                accusam et justo duo dolorea et ea rebum
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
    width: 375,
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
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyNowButtonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 10,
    color: Colors.primary,
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
    // display : 'none',
    // alignSelf : 'center'
    // alignItems : 'center'
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
    // textAlign : 'justify',
    flexDirection: 'column', //its children will be in a row
    alignItems: 'center',
    marginVertical: 7,
    opacity: 0.8,
  },
  paraText: {
    marginLeft: 14,
    fontSize: 12,
    // textAlign : 'justify',
    marginBottom: 20,
  },
  skillsText: {
    opacity: 0.9,
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
  dot: {
    flexDirection: 'row',
    // marginLeft : 3
    // flex : 0.5

    // alignItems : 'center'
  },
});
