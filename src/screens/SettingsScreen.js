import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import {Switch} from 'react-native-elements';
import NavBar from '../components/NavBar';

class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      notification: false,
    };
  }
  toggle = () => {
    this.setState({notification: !this.state.notification});
  };
  render() {
    return (
      <View style={styles.container}>
        <NavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View style={{width: '100%'}}>
            <View>
              <View style={styles.notification}>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.text}>Notifications</Text>
                </View>
                <Switch
                  onValueChange={() => this.toggle()}
                  value={this.state.notification}
                  color={Colors.primary}
                />
              </View>
              <View style={styles.line} />
            </View>

            <View>
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.text}>Payments</Text>
              </View>

              <View style={styles.line} />
            </View>
            <View>
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.text}>Change Password</Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.invertBackground,
  },
  content: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  text: {
    color: Colors.primary,
    marginVertical: 12,
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
  },
  line: {
    height: 1,
    color: Colors.primary,
    borderWidth: 0.3,
    borderColor: Colors.primary,
    marginBottom: 10,
    opacity: 0.6,
    marginHorizontal: 15,
  },
});

export default SettingsScreen;
