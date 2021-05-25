import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import Layout from '../layout/Layout';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Input} from 'react-native-elements';

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
        placeholder="Card Number"
        leftIcon={{
          type: 'font-awesome',
          name: 'credit-card-alt',
          color: Colors.mutedText,
        }}
      />
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
      <View style={{width: '50%'}}>
        <Input
          placeholder="Date"
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
  <View style={[styles.tab, {backgroundColor: Colors.white}]} />
);
const ThirdRoute = () => (
  <View style={[styles.tab, {backgroundColor: Colors.white}]} />
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
          image: require('../assets/images/icons/credit-card.png'),
        },
        {
          key: 'second',
          title: 'GPay',
          image: require('../assets/images/icons/gpay.png'),
        },
        {
          key: 'third',
          title: 'ApplePay',
          image: require('../assets/images/icons/apple-pay.png'),
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

  _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i.toString()}
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
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
  tabItem: {width: '33%'},
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
});

export default PaymentScreen;
