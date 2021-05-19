import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import professional from '../assets/images/png/professional.png';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import CustomStatusBar from '../components/CustomStatusBar';
import NavBar from '../components/NavBar';
import Layout from '../layout/Layout';

export default class FeaturedProfessionalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professionals: [
        {
          name: 'Johnny Depp',
          jobTitle: 'Actor',
          key: 'professional-item-one',
        },
        {
          name: 'Jennifer Lawrence',
          jobTitle: 'Actress',
          key: 'professional-item-two',
        },
        {
          name: 'Martin Scorsese',
          jobTitle: 'Director',
          key: 'professional-item-three',
        },
        {
          name: 'Roger Deakins',
          jobTitle: 'CameraMan',
          key: 'professional-item-four',
        },
        {
          name: 'Vittorio Storaro',
          jobTitle: 'Cinematographer',
          key: 'professional-item-five',
        },
        {
          name: 'Jakie Chan',
          jobTitle: 'Stuntman',
          key: 'professional-item-six',
        },
        {
          name: 'Will Smith',
          jobTitle: 'Actor,Director,Writer',
          key: 'professional-item-seven',
        },
        {
          name: 'Brad Pit',
          jobTitle: 'Actor',
          key: 'professional-item-eight',
        },
        {
          name: 'Tom Honks',
          jobTitle: 'Actor',
          key: 'professional-item-nine',
        },
      ],
    };
  }

  _renderItem({item}) {
    return (
      <View style={{marginVertical: 5}}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Image style={styles.image} source={professional} />
            </View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.jobTitle}>{item.jobTitle}</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy
            </Text>
          </View>
        </View>
      </View>
    );
  }
  keyExtractor = item => item.key.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar />
        <NavBar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={this.keyExtractor}
              data={this.state.professionals}
              renderItem={this._renderItem}
            />
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
  content: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  card: {
    width: Layout.window.width * 0.9,
    borderRadius: 5,
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderColor: Colors.border,
    padding: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  name: {
    fontSize: 14,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    color: Colors.grayText,
  },
  description: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
  },
});
