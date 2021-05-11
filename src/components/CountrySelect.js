import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheet, ListItem, Avatar} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../layout/Colors';
import countries from '../utils/countries';

import CountryIcon from '../assets/images/icons/country.svg';
import Font from '../layout/Font';

class CountrySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      country: null,
      countries: countries,
    };
  }

  selectCountry(country) {
    this.setState({country});
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
                this.state.country
                  ? styles.selectedCountryText
                  : styles.countryPlaceHolderText
              }>
              {this.state.country ?? 'Select Country'}
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
            key={'country-list-item-select'}
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
          {this.state.countries.map((item, index) => (
            <ListItem
              bottomDivider
              onPress={() => this.selectCountry(item.name)}
              key={`country-list-item-${index}`}
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
  countryPlaceHolderText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.mutedText,
  },
  selectedCountryText: {
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
CountrySelect.propTypes = {
  selectContainerStyles: PropTypes.object,
};

export default CountrySelect;
