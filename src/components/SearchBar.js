import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Colors from '../layout/Colors';
import {Input} from 'react-native-elements';
import Font from '../layout/Font';
import Icon from 'react-native-vector-icons/FontAwesome';
class SearchBar extends Component {
  render() {
    return (
      <View>
        <Input
          placeholder={this.props.placeholder}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.input}
          rightIcon={
            <Icon name="search-plus" size={24} color={Colors.primary} />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    width: 342,
    height: 47,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.mutedText,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.transparent,
  },
  input: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
  },
});
SearchBar.propTypes = {};

export default SearchBar;
