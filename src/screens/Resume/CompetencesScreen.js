import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import CustomStatusBar from '../../components/CustomStatusBar';
import BackButtonNavBar from '../../components/BackButtonNavBar';
import Card from '../../components/Competences/Card';

class CompetencesScreen extends Component {
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
            <Card index={key + 1} />
          </Animated.View>
        );
      } else {
        return <Card index={key + 1} key={key.toString()} />;
      }
    });

    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View>
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.pageTitle}>Competences</Text>
              </View>
              <Card index={0} />
              {newList && newList}
              <View style={styles.inputBox}>
                <TouchableOpacity
                  onPress={() => this.addMore()}
                  style={styles.addMoreButton}>
                  <MaterialCommunityIcons
                    name="plus-circle-outline"
                    color={Colors.primary}
                    size={23}
                  />
                  <Text style={styles.addMoreButtonText}>Add More</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputBox}>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Preferences')
                    }
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Continue</Text>
                  </TouchableOpacity>
                </View>
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
    backgroundColor: Colors.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  inputSection: {
    flexDirection: 'row',
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
  textAreaBox: {
    marginVertical: 8,
    marginHorizontal: 3,
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
  textAreaContainerStyle: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.mutedText,
  },
  textArea: {
    borderWidth: 0,
    borderColor: Colors.transparent,
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
  addMoreButton: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addMoreButtonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.primary,
  },
});

CompetencesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CompetencesScreen;
