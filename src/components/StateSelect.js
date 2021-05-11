import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheet, ListItem, Avatar} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../layout/Colors';
import states from '../utils/states';

import CountryIcon from '../assets/images/icons/country.svg';
import Font from '../layout/Font';

class StateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      selected: null,
      states: states,
    };
  }

  select(selection) {
    this.setState({selected: selection});
    this.toggleSelect();
  }
  toggleSelect() {
    this.setState({isVisible: !this.state.isVisible});
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.toggleSelect()}
          style={
            this.props.containerStyle
              ? [styles.selectContainer, this.props.containerStyle]
              : styles.selectContainer
          }>
          <View style={styles.iconWrapper}>
            <CountryIcon width={25} height={25} />
          </View>
          <View>
            <Text
              style={
                this.state.selected
                  ? styles.selectedOptionText
                  : styles.placeHolderText
              }>
              {this.state.selected ?? 'Select State'}
            </Text>
          </View>
          <View style={styles.iconWrapper}>
            <MaterialIcons
              name={'keyboard-arrow-down'}
              color={Colors.primaryLight}
              size={25}
            />
          </View>
        </TouchableOpacity>
        <BottomSheet
          isVisible={this.state.isVisible}
          containerStyle={{
            backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
            zIndex: 99999,
          }}>
          <ListItem
            bottomDivider
            key={'state-list-item-select'}
            containerStyle={{backgroundColor: Colors.primary}}>
            <ListItem.Content
              style={{justifyContent: 'center', alignItems: 'flex-end'}}>
              <Avatar
                onPress={() => this.toggleSelect()}
                icon={{
                  name: 'circle-with-cross',
                  type: 'entypo',
                  color: Colors.red,
                  size: 30,
                }}
              />
            </ListItem.Content>
          </ListItem>
          {this.state.states.map((item, index) => (
            <ListItem
              bottomDivider
              onPress={() => this.select(item.name)}
              key={`state-list-item-${index}`}
              containerStyle={{backgroundColor: Colors.primary}}>
              <ListItem.Content>
                <ListItem.Title style={{color: 'white'}}>
                  {item.name}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  iconWrapper: {
    paddingHorizontal: 10,
  },
  placeHolderText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.mutedText,
  },
  selectedOptionText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.black,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 342,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});
StateSelect.propTypes = {
  selectContainerStyles: PropTypes.object,
};

export default StateSelect;
