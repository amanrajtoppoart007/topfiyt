import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import CountrySelect from "../components/Register/CountrySelect";

class AddProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 'profession-key-one',
          title: 'Player',
          value: 'player',
          selected: false,
        },
        {
          id: 'profession-key-two',
          title: 'Sideshow',
          value: 'sideshow',
          selected: false,
        },
        {
          id: 'profession-key-three',
          title: 'Model',
          value: 'model',
          selected: false,
        },
        {
          id: 'profession-key-four',
          title: 'Musician',
          value: 'musician',
          selected: false,
        },
        {
          id: 'profession-key-five',
          title: 'Photographer',
          value: 'photographer',
          selected: false,
        },
        {
          id: 'profession-key-six',
          title: 'Graphic Artist',
          value: 'graphic-artist',
          selected: false,
        },
      ],
    };
  }

  toggleSelection = i => {
    this.setState(state => {
      const list = state.list.map((item, j) => {
        if (j === i) {
          return {...item, selected: !item.selected};
        } else {
          return item;
        }
      });

      return {
        list,
      };
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo/logo-with-title.png')}
            />
          </View>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.title}>Create your profile</Text>
            <View>
              <Text style={styles.title}>Nationality</Text>
              <CountrySelect />
            </View>
            <View>
              {this.state.list.map((item, index) => {
                return (
                  <View key={item.id} style={styles.cardWrapper}>
                    <TouchableOpacity
                      onPress={() => this.toggleSelection(index)}
                      style={
                        this.state.list[index].selected
                          ? styles.activeCard
                          : styles.card
                      }>
                      <Text
                        style={[
                          styles.cardTitle,
                          this.state.list[index].selected
                            ? {color: Colors.black}
                            : {},
                        ]}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
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
    backgroundColor: Colors.primary,
  },
  wrapper: {
    padding: 15,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 130,
  },
  inputBoxContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
  },
  cardWrapper: {
    marginVertical: 5,
  },
  card: {
    width: 343,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCard: {
    width: 343,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.selected,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginVertical: 30,
  },
  button: {
    width: 343,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  skipButton: {
    width: 343,
    height: 40,
    paddingHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  skipText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
});
AddProfileScreen.propTypes = {};

export default AddProfileScreen;
