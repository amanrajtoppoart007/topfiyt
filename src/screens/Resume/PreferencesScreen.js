import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';
import {CheckBox} from 'react-native-elements';
import Layout from '../../layout/Layout';

class PreferencesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: [
        {
          key: 'preference-item-one',
          title: 'Actor',
          value: 'Actor',
          checked: false,
        },
        {
          key: 'preference-item-two',
          title: 'Dance',
          value: 'dance',
          checked: false,
        },
        {
          key: 'preference-item-three',
          title: 'Music',
          value: 'Music',
          checked: false,
        },
        {
          key: 'preference-item-four',
          title: 'Supporting',
          value: 'Supporting',
          checked: false,
        },
        {
          key: 'preference-item-five',
          title: 'Child Artist',
          value: 'ChildArtist',
          checked: false,
        },
        {
          key: 'preference-item-six',
          title: 'Fashion',
          value: 'Fashion',
          checked: false,
        },
        {
          key: 'preference-item-seven',
          title: 'Voiceover',
          value: 'Voiceover',
          checked: false,
        },
        {
          key: 'preference-item-eight',
          title: 'Singer',
          value: 'Singer',
          checked: false,
        },
        {
          key: 'preference-item-nine',
          title: 'Other',
          value: 'Other',
          checked: false,
        },
      ],
    };
  }

  check = i => {
    this.setState(state => {
      const preferences = state.preferences.map((item, j) => {
        if (j === i) {
          return {...item, checked: !item.checked};
        } else {
          return item;
        }
      });

      return {
        preferences,
      };
    });
  };

  _renderItem = ({item, index}) => {
    return (
      <View style={{width: Layout.window.width * 0.33}}>
        <CheckBox
          containerStyle={{
            backgroundColor: Colors.transparent,
            borderWidth: 0,
          }}
          titleProps={{
            style: {
              fontFamily: Font.PoppinsRegular,
              fontSize: 12,
              color: Colors.mutedText,
              marginHorizontal: 3,
            },
          }}
          title={item.title}
          checkedColor={Colors.primary}
          uncheckedColor={Colors.primary}
          checked={item.checked}
          onPress={() => this.check(index)}
        />
      </View>
    );
  };
  keyExtractor = item => item.key.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View>
            <View style={{marginHorizontal: 5}}>
              <Text style={styles.pageTitle}>Preferences</Text>
            </View>
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={3}
                keyExtractor={this.keyExtractor}
                data={this.state.preferences}
                renderItem={this._renderItem}
              />
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Templates')}
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    backgroundColor: Colors.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 15,
  },
  pageTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  labelWrapper: {
    marginBottom: 3,
    marginHorizontal: 0,
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.black,
  },
  containerStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.mutedText,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.transparent,
  },
  inputBox: {
    marginVertical: 8,
    marginHorizontal: 3,
  },
  input: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
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

PreferencesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PreferencesScreen;
