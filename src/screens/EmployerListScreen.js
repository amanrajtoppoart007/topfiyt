import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import image from '../assets/images/png/employer.png';
import Colors from '../layout/Colors';
import Font from '../layout/Font';
import CustomStatusBar from '../components/CustomStatusBar';
import NavBar from '../components/NavBar';
import Layout from '../layout/Layout';

class EmployerListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employers: [
        {
          name: 'Employer one',
          key: 'employer-item-one',
        },
        {
          name: 'Employer two',
          key: 'employer-item-two',
        },
        {
          name: 'Employer three',
          key: 'employer-item-three',
        },
        {
          name: 'Employer four',
          key: 'employer-item-four',
        },
        {
          name: 'Employer Five',
          key: 'employer-item-five',
        },
        {
          name: 'Employer Six',
          key: 'employer-item-six',
        },
        {
          name: 'Employer Seven',
          key: 'employer-item-seven',
        },
        {
          name: 'Employer Eight',
          key: 'employer-item-eight',
        },
        {
          name: 'Employer Nine',
          key: 'employer-item-nine',
        },
        {
          name: 'Employer Ten',
          key: 'employer-item-ten',
        },
        {
          name: 'Employer eleven',
          key: 'employer-item-eleven',
        },
        {
          name: 'Employer twelve',
          key: 'employer-item-twelve',
        },
        {
          name: 'Employer thirteen',
          key: 'employer-item-thirteen',
        },
        {
          name: 'Employer fourteen',
          key: 'employer-item-fourteen',
        },
        {
          name: 'Employer fifteen',
          key: 'employer-item-fifteen',
        },
        {
          name: 'Employer sixteen',
          key: 'employer-item-sixteen',
        },
      ],
    };
  }

  _renderItem({item}) {
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
            <View style={{paddingHorizontal: 20}}>
              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText}>SHARE</Text>
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
              data={this.state.employers}
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
    backgroundColor: Colors.invertBackground,
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
  shareButton: {
    width: 80,
    height: 25,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
  },
});
export default EmployerListScreen;
