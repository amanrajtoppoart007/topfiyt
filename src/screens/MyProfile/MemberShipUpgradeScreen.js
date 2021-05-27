import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image, Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';

class MemberShipUpgradeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          key: 'membership-item-one',
          title: 'Instant job alerts',
          access: true,
        },
        {
          key: 'membership-item-two',
          title: 'Free hosted online portfolio',
          access: true,
        },
        {
          key: 'membership-item-three',
          title: 'Access to noticeboard',
          access: true,
        },
        {
          key: 'membership-item-four',
          title: 'Apply to all job openings',
          access: false,
        },
        {
          key: 'membership-item-five',
          title: "See who's viewed your profile",
          access: false,
        },
        {
          key: 'membership-item-six',
          title: 'Appear higher in search results',
          access: false,
        },
        {
          key: 'membership-item-seven',
          title: 'Browse our directory of employers',
          access: false,
        },
        {
          key: 'membership-item-eight',
          title: 'Upload up to 20 photos and 30 \n' + 'media files',
          access: false,
        },
        {
          key: 'membership-item-nine',
          title: 'Seek representation with our lead\n' + 'An agent feature',
          access: false,
        },
        {
          key: 'membership-item-ten',
          title: 'Attend Career surgeries and \n' + 'networking events',
          access: false,
        },
      ],
    };
  }

  _renderItem({item}) {
    return (
      <View>
        <View style={{margin: 10}}>
          <View>
            <View style={styles.row}>
              <View style={{marginHorizontal: 5}}>
                {item.access ? (
                  <Image
                    source={require('../../assets/images/icons/checked.png')}
                  />
                ) : (
                  <Image source={require('../../assets/images/icons/close.png')} />
                )}
              </View>
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  keyExtractor = item => item.key.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View style={{width: '100%'}}>
            <View style={styles.card}>
              <View style={styles.header}>
                <Text style={styles.cardTitle}>Individual Membership</Text>
              </View>
              <View>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  keyExtractor={this.keyExtractor}
                  data={this.state.features}
                  renderItem={this._renderItem}
                />
              </View>
            </View>
            <View>
              <View style={{marginVertical: 3}}>
                <Pressable
                  onPress={() => this.props.navigation.navigate('Payment')}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Upgrade now</Text>
                </Pressable>
              </View>
              <View>
                <Pressable
                  onPress={() => this.props.navigation.navigate('Home')}
                  style={styles.button}>
                  <Text style={styles.buttonText}>
                    Continue without upgrading
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 30,
  },
  card: {
    borderWidth: 0.5,
    borderColor: Colors.mutedText,
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.mutedText,
    fontWeight: 'bold',
  },
  marginHorizontal: {
    marginHorizontal: 5,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
MemberShipUpgradeScreen.propTypes = {};

export default MemberShipUpgradeScreen;
