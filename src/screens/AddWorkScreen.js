import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import {Input} from 'react-native-elements';
import MediaPicker from '../components/AddWork/MediaPicker';
import BackButtonNavBar from '../components/BackButtonNavBar';

class AddWorkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      list: [],
      disabled: false,
    };
    this.index = 0;
    this.animatedValue = new Animated.Value(0);
  }

  addMore = () => {
    this.animatedValue.setValue(0);

    let newlyAddedItem = {index: this.index};

    this.setState(
      {disabled: true, list: [...this.state.list, newlyAddedItem]},
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.index = this.index + 1;
          this.setState({disabled: false});
        });
      },
    );
  };

  render() {
    const animationItem = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-59, 0],
    });

    let newList = this.state.list.map((item, key) => {
      if (key === this.index) {
        return (
          <Animated.View key={key}>
            <MediaPicker />
          </Animated.View>
        );
      } else {
        return <MediaPicker />;
      }
    });

    return (
      <SafeAreaView style={styles.container}>
        <BackButtonNavBar navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Project Name</Text>
                </View>
                <Input
                  placeholder={'Project Name'}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
              <View style={styles.inputBox}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.label}>Role</Text>
                </View>
                <Input
                  placeholder={'Role'}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.input}
                  placeholderTextColor={Colors.mutedText}
                />
              </View>
              <View style={{marginVertical: 15}}>
                <MediaPicker />
                {newList && newList}
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => this.addMore()}
                  style={styles.addMoreButton}>
                  <View style={{marginHorizontal: 3}}>
                    <Feather
                      name={'plus-circle'}
                      size={23}
                      color={Colors.white}
                    />
                  </View>
                  <View style={{marginHorizontal: 3}}>
                    <Text style={styles.addMoreButtonText}>Add More</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonSection}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('AddWork')}
                  style={styles.button}>
                  <Text style={styles.buttonText}>CONTINUE</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('JobDescription')
                  }
                  style={styles.skipButton}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelWrapper: {
    marginBottom: 3,
    marginHorizontal: 10,
  },
  label: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
  inputBox: {
    marginVertical: 5,
    height: 65,
  },
  inputContainerStyle: {
    width: 342,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
  },
  input: {
    width: 342,
    height: 40,
    borderRadius: 5,
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
    paddingHorizontal: 10,
  },
  addMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  addMoreButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
  buttonSection: {
    marginVertical: 50,
  },
  button: {
    width: 342,
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
    fontWeight: 'bold',
  },
  skipButton: {
    width: 342,
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
AddWorkScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddWorkScreen;
