import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../layout/Colors';
import User from '../../assets/images/svg/user.svg';
import Layout from '../../layout/Layout';
import Font from '../../layout/Font';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SearchBox extends Component {
  render() {
    return (
      <View style={{height: 60}}>
        <View style={styles.searchBox}>
          <User width={50} height={50} />
          <View style={styles.inputContainerStyle}>
            <TextInput
              placeholder={'Write something here...'}
              style={styles.input}
              placeholderTextColor={Colors.mutedText}
            />
            <View style={styles.inputHelperIconContainer}>
              <Ionicons
                style={{marginLeft: 10}}
                name={'ios-camera-outline'}
                size={17}
                color={Colors.black}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBox: {
    width: Layout.window.width,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    width: 318,
    height: 46,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderBottomWidth: 0,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  input: {
    width: '90%',
    height: 46,
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    color: Colors.grayText,
  },
  inputHelperIconContainer: {
    width: '10%',
  },
});
SearchBox.propTypes = {};

export default SearchBox;
