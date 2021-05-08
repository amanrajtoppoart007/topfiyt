import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Colors from '../layout/Colors';
import AppIntroSlider from 'react-native-app-intro-slider';

import Font from '../layout/Font';
import PropTypes from 'prop-types';

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 'slider-item-1',
          title: 'Tour Title will come here',
          text:
            'Lorem Ipsum is simply dummy text of the \n' +
            'printing and typesetting industry.',
          textWidth: 300,
          src: require('../assets/images/welcome/first-slider-image.png'),
          bg: Colors.secondary,
          imageStyle: {
            width: 342,
            height: 223,
            marginVertical: 10,
          },
          titleWrapperStyle: {
            marginVertical: 10,
          },
        },
        {
          id: 'slider-item-2',
          title: 'Tour Title will come here',
          text:
            'Lorem Ipsum is simply dummy text of the \n' +
            'printing and typesetting industry.',
          textWidth: 300,
          src: require('../assets/images/welcome/second-slider-image.png'),
          bg: Colors.secondary,
          imageStyle: {
            width: 342,
            height: 223,
            marginVertical: 10,
          },
          titleWrapperStyle: {
            marginVertical: 10,
          },
        },
        {
          id: 'slider-item-3',
          title: 'Tour Title will come here',
          text:
            'Lorem Ipsum is simply dummy text of the \n' +
            'printing and typesetting industry.',
          textWidth: 350,
          src: require('../assets/images/welcome/third-slider-image.png'),
          bg: Colors.secondary,
          imageStyle: {
            width: 342,
            height: 223,
            marginVertical: 10,
          },
          titleWrapperStyle: {
            marginVertical: 10,
          },
        },
      ],
    };
  }

  slider: AppIntroSlider | undefined;
  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <View>
          <Image
            style={{width: 370, height: 250}}
            source={require('../assets/images/logo/logo-with-title.png')}
          />
        </View>
        <Image source={item.src} style={item.imageStyle} />
        <View style={item.titleWrapperStyle}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={[styles.text, {width: item.textWidth}]}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={Colors.primary} />
        <View style={styles.container}>
          <AppIntroSlider
            dotStyle={styles.dot}
            bottomButton={false}
            activeDotStyle={styles.activeDot}
            keyExtractor={this._keyExtractor}
            skipLabel={'Skip'}
            nextLabel={'Next'}
            doneLabel={'Finish'}
            showSkipButton={true}
            renderItem={this._renderItem}
            data={this.state.data}
            onDone={() => this.props.navigation.navigate('Login')}
            onSkip={() => this.props.navigation.navigate('Login')}
          />
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
  activeDot: {
    width: 12,
    height: 12,
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  button: {
    alignItems: 'center',
    borderRadius: 20,
    height: 37,
    justifyContent: 'center',
    width: 167,
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    fontSize: 17,
  },

  image: {
    backgroundColor: Colors.red,
    marginTop: 0,
  },

  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
  text: {
    fontFamily: Font.PoppinsRegular,
    alignItems: 'center',
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default WelcomeScreen;
