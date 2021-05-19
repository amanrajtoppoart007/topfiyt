import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import image from '../../assets/images/png/agent.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../layout/Colors';
import {Avatar} from 'react-native-elements';
import Layout from '../../layout/Layout';
import Font from '../../layout/Font';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    };
  }
  toggleLike() {
    this.setState({like: !this.state.like});
  }
  render() {
    const {item} = this.props;
    return (
      <View style={{marginVertical: 5}}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleWrapper}>
              <Image style={styles.image} source={image} />
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Ionicons
                  onPress={() => this.toggleLike()}
                  name={this.state.like ? 'heart' : 'heart-outline'}
                  size={28}
                  color={Colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Avatar
                  size="small"
                  rounded
                  icon={{
                    name: 'share',
                    type: 'material-community',
                    color: Colors.primary,
                  }}
                  containerStyle={styles.shareButtonContainer}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.description}>
              Lorem ipsum, or lipsum as it is sometimes known, is dum my text
              used in laying out print, graphic or web designs.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  card: {
    backgroundColor: Colors.white,
    width: Layout.window.width * 0.9,
    borderWidth: 0.5,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: Colors.border,
    padding: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  shareButtonContainer: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  button: {
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  buttonText: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
  },
});
CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardItem;
