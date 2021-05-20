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
import AddProject from '../components/AddWork/AddProject';
import OnlyBackButtonNavBar from '../components/OnlyBackIconNavBar';

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
    this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-59, 0],
    });

    let newList = this.state.list.map((item, key) => {
      if (key === this.index) {
        return (
          <Animated.View index={key + 1} key={key.toString()}>
            <AddProject />
          </Animated.View>
        );
      } else {
        return <AddProject index={key + 1} key={key.toString()} />;
      }
    });

    return (
      <SafeAreaView style={styles.container}>
        <OnlyBackButtonNavBar navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <View>
              <View>
                <View style={{marginVertical: 15}}>
                  <AddProject index={0} />
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
                    onPress={() =>
                      this.props.navigation.navigate('UploadResume')
                    }
                    style={styles.button}>
                    <Text style={styles.buttonText}>CONTINUE</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.rowCenter}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                  style={styles.prevButton}>
                  <Text style={styles.prevButtonText}>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('UploadResume')}
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
    width: '100%',
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
    width: '50%',
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
  prevButton: {
    width: '50%',
    height: 40,
    paddingHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  prevButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
AddWorkScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddWorkScreen;
