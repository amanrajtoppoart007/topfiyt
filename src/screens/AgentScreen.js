import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import rk from '../assets/images/card-images/rk.jpg';
import forward from '../assets/images/logo/forward.png';
import Colors from '../layout/Colors';
import Font from '../layout/Font';

export default class AgentScreen extends Component {
  render() {
    return (
      <View>
        <Text>from agennt screen</Text>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeader1}>
              <Image style={styles.img} source={rk} />
              <Text style={styles.agentText}>Agent Name</Text>
            </View>

            <View style={styles.icons}>
            <TouchableOpacity>
                <Icon style={styles.heart} name="favorite-border" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={forward} />
            </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy
          </Text>

        <TouchableOpacity style={styles.cardFooter}>
             <Text style={styles.seeMore}>See More</Text>
            <Icon style={styles.arrowForward} name="arrow-forward" />
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
      marginHorizontal : 10,
      marginVertical : 10,
      borderWidth: 1,
      borderTopRightRadius : 10,
      borderBottomLeftRadius : 10,
      borderColor : Colors.lightgray
    
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardHeader1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 40,
    marginHorizontal : 4,
    marginTop : 5
  },
  agentText : {
    fontFamily : Font.PoppinsSemiBold,
    fontSize : 12,
    marginLeft : 10,
    marginTop : 7
  },
  icons : {
      flexDirection : 'row',
      alignItems : "center"
  },
  heart : {
      fontSize : 17,
      marginRight : 5,
      color : Colors.primary
  },
  text : {
      fontFamily : Font.PoppinsRegular,
      fontSize : 10,
      marginHorizontal : 10,
      marginVertical : 10
  },
  cardFooter : {
      flexDirection : 'row',
      alignItems : 'center',
      marginLeft : 10,
      marginBottom : 10
  },
  seeMore : {
      color : Colors.primary,
      fontFamily : Font.PoppinsRegular,
      fontSize : 10,
  },
  arrowForward : {
      fontSize : 14,
      color : Colors.primary,
      marginLeft : 5

  }
});
