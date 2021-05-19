import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import action from '../../assets/images/card-images/action.jpg';
import Colors from '../../layout/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Font from '../../layout/Font';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: false,
    };
  }

  show = () => {
    this.setState({color: !this.state.color});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <ImageBackground style={styles.bgImage} source={action}>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  padding: 10,
                }}>
                <FontAwesome
                  onPress={() => this.show()}
                  style={styles.heart}
                  backgroundColor={Colors.white}
                  name={this.state.color ? 'heart' : 'heart-o'}
                  solid
                />
              </View>
            </ImageBackground>
          </View>

          <View style={{width: '100%'}}>
            <View style={styles.textWrapper}>
              <Text style={styles.title}>
                {this.props.item ? this.props.item.title ?? 'ACTOR' : 'ACTOR'}
              </Text>
              <Text style={styles.title}>
                {this.props.item
                  ? this.props.item.companyName ?? 'COMPANY NAME'
                  : 'COMPANY NAME'}
              </Text>
            </View>
          </View>

          <View style={styles.para}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('JobDescription')}
            style={styles.applyButton}>
            <Text style={styles.applyButtonText}>APPLY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginVertical: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.transparent,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    alignSelf: 'center',
    width: 380,
    height: 110,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  heart: {
    fontSize: 30,
    width: 30,
    height: 30,
    color: Colors.primary,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 10,
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 14,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  text: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: Colors.mutedText,
  },
  para: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  applyButton: {
    width: 380,
    height: 30,
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  applyButtonText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    paddingVertical: 4,
  },
});
JobCard.propTypes = {};

export default JobCard;
