import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import Layout from '../../layout/Layout';

class CardItem extends Component {
  constructor(props) {
    super(props);
  }

  getColor(status) {
    switch (status) {
      case 'pending':
        return Colors.warning;
      case 'selected':
        return Colors.primary;
      case 'rejected':
        return Colors.danger;
      default:
        return Colors.primary;
    }
  }
  render() {
    const {item, navigation, interview} = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <View style={styles.topContainer}>
              <Text style={styles.jobTitle}>{item.jobTitle}</Text>
              <Text style={styles.date}>Applied 22 April 2020</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.companyName,
                  {color: this.getColor(item.status)},
                ]}>
                COMPANY NAME
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.contactButtonWrapper}>
              <View style={{marginHorizontal: 3}}>
                <TouchableOpacity style={styles.contactButton}>
                  <Icon
                    size={10}
                    name="phone"
                    type="feather"
                    color={Colors.primary}
                    onPress={() => this.props.toggleInterviewModal()}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginHorizontal: 3}}>
                <TouchableOpacity style={styles.contactButton}>
                  <Icon
                    size={10}
                    name="ios-videocam-outline"
                    type="ionicon"
                    color={Colors.primary}
                    onPress={() => this.props.toggleInterviewModal()}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MyJobDetail', {
                  id: item.key,
                  status: item.status,
                })
              }
              style={[
                styles.statusButton,
                {backgroundColor: this.getColor(item.status)},
              ]}>
              <Text style={styles.statusButtonText}>SELECTED</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textView}>
          <Text style={styles.paragraphText}>
            Lorem ipsum dolor sit amet, consetetur sadipcing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluqtua
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    width: Layout.window.width * 0.9,
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: 2,
    padding: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: Font.PoppinsSemiBold,
    color: Colors.black,
  },
  contactButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 7,
    fontFamily: Font.PoppinsRegular,
    marginLeft: 10,
    color: Colors.mutedText,
  },

  image: {},
  statusButton: {
    width: 85,
    height: 25,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.white,
  },
  textView: {},
  companyName: {
    color: Colors.black,
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    fontWeight: 'bold',
  },
  paragraphText: {
    fontSize: 10,
    letterSpacing: 0.5,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
  },
});

CardItem.propTypes = {};

export default CardItem;
