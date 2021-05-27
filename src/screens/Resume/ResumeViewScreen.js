import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';
import {Icon, Divider} from 'react-native-elements';
import Font from '../../layout/Font';
import SkillList from '../../components/Resume/SkillList';

class ResumeViewScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar
          containerStyle={{marginTop: 0}}
          navigation={this.props.navigation}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View>
              <View style={styles.actionSection}>
                <View style={styles.actionIconWrapper}>
                  <Icon
                    containerStyle={styles.circle}
                    name={'edit'}
                    type={'material'}
                    size={25 / 2}
                    color={Colors.primary}
                  />
                </View>
                <View style={styles.actionIconWrapper}>
                  <Icon
                    name={'cloud-download-outline'}
                    type={'material-community'}
                    size={30}
                    color={Colors.primary}
                  />
                </View>
                <View style={styles.actionIconWrapper}>
                  <Icon
                    name={'ios-arrow-redo-circle-outline'}
                    type={'ionicon'}
                    size={30}
                    color={Colors.primary}
                  />
                </View>
              </View>
              <View>
                <View>
                  <View style={{marginVertical: 8}}>
                    <Text style={styles.title}>My Name</Text>
                  </View>
                  <Text style={styles.description}>
                    10/20 Ashok Vihar Vaishali Nagar
                  </Text>
                  <Text style={styles.description}>Example@gmail.com</Text>
                  <Text style={styles.description}>70862675333</Text>
                </View>
                <Divider style={styles.divider} />
                <View>
                  <View style={{marginVertical: 8}}>
                    <Text style={styles.title}>Objective</Text>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <View style={styles.row}>
                      <Text style={styles.subTitle}>Education - School</Text>
                      <Text style={styles.year}>2011 - 2014</Text>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text style={styles.description}>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </Text>
                    </View>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <View style={styles.row}>
                      <Text style={styles.subTitle}>Education - School</Text>
                      <Text style={styles.year}>2011 - 2014</Text>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text style={styles.description}>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </Text>
                    </View>
                  </View>
                </View>
                <Divider style={styles.divider} />
                <View>
                  <View style={{marginVertical: 8}}>
                    <Text style={styles.title}>Work Experience</Text>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <View style={styles.row}>
                      <Text style={styles.subTitle}>COMPANY - TITLE</Text>
                      <Text style={styles.year}>2011 -present</Text>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text style={styles.description}>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs. Lorem ipsum, or lipsum as it is sometimes known
                      </Text>
                    </View>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <View style={styles.row}>
                      <Text style={styles.subTitle}>COMPANY - TITLE</Text>
                      <Text style={styles.year}>2009 -2010</Text>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text style={styles.description}>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs. Lorem ipsum, or lipsum as it is sometimes known
                      </Text>
                    </View>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <View style={styles.row}>
                      <Text style={styles.subTitle}>COMPANY - TITLE</Text>
                      <Text style={styles.year}>2009 -2010</Text>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text style={styles.description}>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs. Lorem ipsum, or lipsum as it is sometimes known
                      </Text>
                    </View>
                  </View>
                </View>
                <Divider style={styles.divider} />
                <View>
                  <View style={{marginVertical: 8}}>
                    <Text style={styles.title}>Skills</Text>
                  </View>
                  <View>
                    <SkillList />
                  </View>
                </View>
                <Divider style={styles.divider} />
                <View>
                  <View style={{marginVertical: 8}}>
                    <Text style={styles.title}>Language</Text>
                  </View>
                  <View>
                    <View style={styles.textWrapper}>
                      <View style={{marginHorizontal: 3, width: 40}}>
                        <Text style={styles.description}>English</Text>
                      </View>
                      <View style={{marginHorizontal: 3}}>
                        <Text
                          style={[styles.description, {color: Colors.primary}]}>
                          * &nbsp;&nbsp; Excellent
                        </Text>
                      </View>
                    </View>

                    <View style={styles.textWrapper}>
                      <View style={{marginHorizontal: 3, width: 40}}>
                        <Text style={styles.description}>Hindi</Text>
                      </View>
                      <View style={{marginHorizontal: 3}}>
                        <Text
                          style={[styles.description, {color: Colors.primary}]}>
                          * &nbsp;&nbsp; Excellent
                        </Text>
                      </View>
                    </View>
                  </View>
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
  content: {
    padding: 15,
  },
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIconWrapper: {
    marginHorizontal: 5,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  subTitle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.mutedText,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  description: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.mutedText,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: Colors.primary,
    marginVertical: 10,
  },
});

ResumeViewScreen.propTypes = {};

export default ResumeViewScreen;
