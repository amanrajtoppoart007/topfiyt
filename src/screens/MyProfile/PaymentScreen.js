import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import Layout from '../../layout/Layout';
import {TabView, SceneMap} from 'react-native-tab-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FirstRoute = () => (
  <View style={[styles.tab, {backgroundColor: Colors.white}]}>
    <View>
      <Text style={styles.paymentTitle}>Payment Details</Text>
    </View>
    <View>
      <Input
        placeholder="Card holder name"
        leftIcon={{
          type: 'font-awesome',
          name: 'user',
          color: Colors.mutedText,
        }}
      />
    </View>
    <View>
      <Input
        keyboardType={'number-pad'}
        placeholder="Card Number"
        leftIcon={{
          type: 'font-awesome',
          name: 'credit-card-alt',
          color: Colors.mutedText,
        }}
      />
    </View>
    <View style={styles.rowCenter}>
      <View style={{width: '50%'}}>
        <Input
          placeholder="Date"
          keyboardType={'number-pad'}
          leftIcon={{
            type: 'font-awesome',
            name: 'calendar',
            color: Colors.mutedText,
          }}
        />
      </View>
      <View style={{width: '50%'}}>
        <Input
          placeholder="CVV"
          keyboardType={'number-pad'}
          maxLength={3}
          leftIcon={{
            type: 'font-awesome',
            name: 'code',
            color: Colors.mutedText,
          }}
        />
      </View>
    </View>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.tab, {backgroundColor: Colors.white}]}>
    <View>
      <Text style={styles.paymentTitle}>Payment Details</Text>
    </View>
    <View>
      <Input
        placeholder="Google Pay Id"
        leftIcon={{
          type: 'font-awesome',
          name: 'google-wallet',
          color: Colors.mutedText,
        }}
      />
    </View>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.tab, {backgroundColor: Colors.white}]}>
    <View>
      <Text style={styles.paymentTitle}>Payment Details</Text>
    </View>
    <View>
      <Input
        placeholder="Apple Pay Id"
        leftIcon={
          <FontAwesome5 name="apple-pay" size={35} color={Colors.mutedText} />
        }
      />
    </View>
  </View>
);

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {
          key: 'first',
          title: 'Credit Card',
          image: require('../../assets/images/icons/credit-card.png'),
          selected: true,
        },
        {
          key: 'second',
          title: 'GPay',
          image: require('../../assets/images/icons/gpay.png'),
          selected: false,
        },
        {
          key: 'third',
          title: 'ApplePay',
          image: require('../../assets/images/icons/apple-pay.png'),
          selected: false,
        },
      ],
    };
  }
  _handleIndexChange = index => this.setState({index});

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  check = i => {
    this.setState(state => {
      const routes = state.routes.map((item, j) => {
        if (j === i) {
          return {...item, selected: true};
        } else {
          return {...item, selected: false};
        }
      });

      return {
        routes,
      };
    });
  };

  select = i => {
    this.setState({index: i});
    this.check(i);
  };

  _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i.toString()}
              style={styles.tabItem}
              onPress={() => this.select(i)}>
              {route.selected && (
                <View style={styles.check}>
                  <FontAwesome name={'check'} color={Colors.primary} size={9} />
                </View>
              )}
              <Image source={route.image} style={{width: 68, height: 24}} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.center}>
            <Text style={styles.title}>Confirm Membership & Pay Now</Text>
          </View>
          <View style={[styles.center, styles.textWrapper]}>
            <Text style={styles.text}>
              Please make the payment after that you can enjoy all the benefits
              and features
            </Text>
          </View>
          <View>
            <View style={styles.card}>
              <View style={{width: '100%'}}>
                <Text style={styles.cardTitle}>Payment Method</Text>
              </View>
              <View style={styles.cardBody}>
                <TabView
                  navigationState={this.state}
                  renderScene={this._renderScene}
                  renderTabBar={this._renderTabBar}
                  onIndexChange={this._handleIndexChange}
                />
              </View>
            </View>
          </View>
          <View style={{marginVertical: 50}}>
            <View style={styles.center}>
              <Pressable
                onPress={() =>
                  this.props.navigation.navigate('PaymentConfirmation')
                }
                style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Pay Now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  check: {
    position: 'absolute',
    zIndex: 1,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.primaryLight,
    top: -5,
    left: -5,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  card: {
    width: Layout.window.width * 0.95,
    height: 350,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.mutedText,
    padding: 15,
  },
  cardTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.grayText,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  paymentTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.black,
  },
  cardBody: {
    flex: 1,
    width: '100%',
  },
  tabBar: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  tab: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.white,
  },
  tabItem: {width: '33%', marginHorizontal: 5},
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
  submitButton: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
