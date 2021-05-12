import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/logo/logo.png';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import Layout from '../layout/Layout';

import Filter from './Filter';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      filter: false,
    };
  }
  toggleSearch = () => {
    this.setState({search: !this.state.search});
  };
  toggleFilter = () => {
    this.setState({filter: !this.state.filter});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Icon style={styles.backArrow} name="keyboard-backspace" />
          </View>

          <View style={styles.logoView}>
            <Image style={styles.logo} source={logo} />
          </View>

          <View style={styles.icons}>
            <Icon
              onPress={() => this.toggleSearch()}
              style={styles.icon}
              name="search"
            />
            <Icon style={styles.icon} name="notifications" />
            <Icon
              style={styles.icon}
              onPress={() => this.toggleFilter()}
              name="filter-list"
            />
          </View>
        </View>
        {this.state.search && (
          <Overlay
            fullScreen={true}
            overlayStyle={{
              padding: 0,
              margin: 0,
              marginTop: 70 + StatusBar.currentHeight,
              backgroundColor: Colors.transparent,
            }}
            backdropStyle={{
              marginTop: 50 + StatusBar.currentHeight,
            }}
            isVisible={this.state.search}
            onBackdropPress={() => this.toggleSearch()}>
            <View style={styles.inputView}>
              <View style={{width: '80%'}}>
                <TextInput
                  style={styles.inputSearch}
                  placeholderTextColor={'white'}
                  placeholder="Search Job"
                />
              </View>

              <TouchableOpacity
                style={styles.search}
                onPress={() => this.toggleSearch()}>
                <Icon size={18} color={Colors.white} name="search" />
              </TouchableOpacity>
            </View>
          </Overlay>
        )}

        {this.state.filter && (
          <Overlay
            overlayStyle={{
              backgroundColor: Colors.transparent,
            }}
            fullScreen={true}
            isVisible={this.state.filter}
            onBackdropPress={() => this.toggleFilter()}>
            <Filter toggleFilter={() => this.toggleFilter()} />
          </Overlay>
        )}
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  header: {
    height: 48,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  icon: {
    fontSize: 30,
    opacity: 0.7,
  },
  backArrow: {
    fontSize: 30,
    marginLeft: 10,
    color: Colors.primary,
  },
  logoView: {
    marginLeft: 10,
    paddingHorizontal: 15,
  },
  logo: {
    width: 24,
    height: 31,
  },
  inputView: {
    width: Layout.window.width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
  },
  inputSearch: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
  },
  search: {
    width: '10%',
    marginRight: 15,
  },
});
