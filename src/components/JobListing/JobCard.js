import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../Header';
import action from '../../assets/images/card-images/action.jpg';
import Colors from '../../layout/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function JobCard() {
  const [color, setColor] = useState(false);
  const show = () => {
    setColor(!color);
  };
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <View style={styles.card}>
        <View>
          <Icon
            onPress={() => show()}
            style={color ? styles.heart2 : styles.heart}
            name="favorite"
          />
          <Image style={styles.img} source={action} />
        </View>

        <View style={styles.text}>
          <Text>ACTOR</Text>
          <Text>COMPANY NAME</Text>
        </View>

        <View style={styles.para}>
          <Text style={styles.paraText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy
          </Text>
        </View>

        <TouchableOpacity style={styles.applyView}>
          <Text style={styles.apply}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default JobCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  card: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    marginHorizontal: 29,
  },
  img: {
    alignSelf: 'center',
    width: 300,
    height: 130,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  heart: {
    position: 'relative',
    top: 30,
    left: 270,
    fontSize: 25,
    color: 'white',
    zIndex: 1,
  },
  heart2: {
    position: 'relative',
    top: 30,
    left: 270,
    fontSize: 25,
    color: Colors.primary,
    zIndex: 1,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 10,
  },
  para: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  paraText: {
    fontSize: 12,
    letterSpacing: 0.6,
  },
  applyView: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  apply: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,

    paddingVertical: 4,
  },
});
