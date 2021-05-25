import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';

import Layout from '../../layout/Layout';

class TemplatesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: [
        {
          key: 'template-item-one',
          title: 'Template 1',
          value: 'template_one',
          checked: true,
        },
        {
          key: 'template-item-two',
          title: 'Template 2',
          value: 'template_two',
          checked: false,
        },
        {
          key: 'template-item-three',
          title: 'Template 3',
          value: 'template_three',
          checked: false,
        },
        {
          key: 'template-item-four',
          title: 'Template 4',
          value: 'template_four',
          checked: false,
        },
      ],
    };
  }

  check = i => {
    this.setState(state => {
      const preferences = state.preferences.map((item, j) => {
        if (j === i) {
          return {...item, checked: true};
        } else {
          return {...item, checked: false};
        }
      });

      return {
        preferences,
      };
    });
  };

  _renderItem = ({item, index}) => {
    return (
      <View style={{margin: 5}}>
        <Pressable onPress={() => this.check(index)} style={styles.template}>
          {item.checked && (
            <View style={styles.check}>
              <FontAwesome name={'check'} color={Colors.primary} size={12} />
            </View>
          )}
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </Pressable>
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
            <View style={[styles.center, {marginHorizontal: 5}]}>
              <Text style={styles.pageTitle}>Templates</Text>
            </View>
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                numColumns={2}
                keyExtractor={this.keyExtractor}
                data={this.state.preferences}
                renderItem={this._renderItem}
              />
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={[styles.center, {marginHorizontal: 15}]}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CreatePersonalDetail')
                    }
                    style={styles.submitButton}>
                    <View style={{marginHorizontal: 3}}>
                      <FontAwesome
                        name={'eye'}
                        size={24}
                        color={Colors.white}
                      />
                    </View>
                    <Text style={styles.submitButtonText}>Preview</Text>
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
    fontSize: 24,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  template: {
    width: Layout.window.width * 0.4,
    height: 240,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 1,
    borderColor: Colors.mutedText,
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.primary,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
  check: {
    position: 'absolute',
    zIndex: 1,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primaryLight,
    top: -5,
    left: -10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  submitButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

TemplatesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TemplatesScreen;
