import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CheckBox} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';

class SkillCheckBoxItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <CheckBox
          size={10}
          onPress={() => this.setState({checked: !this.state.checked})}
          containerStyle={styles.checkboxContainer}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          uncheckedColor={Colors.primaryLight}
          checkedColor={Colors.primaryLight}
          textStyle={styles.text}
          title={this.props.item.title}
          checked={this.state.checked}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    width: 98,
    height: 25,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  text: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.black,
    fontWeight: '400',
  },
});

SkillCheckBoxItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SkillCheckBoxItem;
