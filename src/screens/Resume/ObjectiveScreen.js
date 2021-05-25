import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
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
import SearchBar from '../../components/SearchBar';
import {Input} from 'react-native-elements';
class ObjectiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  setSearch(keyword) {
    this.setState({keyword});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <BackButtonNavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View>
            <View style={{marginHorizontal: 5}}>
              <Text style={styles.pageTitle}>Objective</Text>
            </View>
            <View style={{marginVertical: 30}}>
              <SearchBar
                search={this.setSearch}
                placeholder={'Title/Industry/ Keyword'}
              />
            </View>
            <View style={styles.textAreaBox}>
              <View style={styles.center}>
                <Input
                  placeholder={'Text Area'}
                  multiline={true}
                  maxLength={120}
                  style={styles.textArea}
                  inputContainerStyle={{
                    borderWidth: 0,
                    borderColor: Colors.transparent,
                  }}
                  containerStyle={styles.textAreaContainerStyle}
                />
              </View>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Project')}
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
  textAreaBox: {
    marginVertical: 8,
    marginHorizontal: 3,
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
});

ObjectiveScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ObjectiveScreen;
