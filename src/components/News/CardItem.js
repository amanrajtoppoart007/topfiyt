import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import newsImage from '../../assets/images/news/news.png';
import Colors from '../../layout/Colors';
import Layout from '../../layout/Layout';
import Font from '../../layout/Font';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {item} = this.props;
    return (
      <View style={{marginVertical: 5}}>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <View style={styles.cardImageWrapper}>
                <Image style={styles.image} source={newsImage} />
              </View>
            </View>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dum my
                  text text text text used in laying out print, graphic or web
                  designs.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={styles.seeMoreWrapper}>
                  <Text style={styles.seeMoreText}>See More</Text>
                  <Icon
                    size={10}
                    name="arrow-forward"
                    type="ionicons"
                    color={Colors.primary}
                  />
                </View>
                <View style={styles.timeStampWrapper}>
                  <Text style={styles.timeStampText}>5 min ago</Text>
                  <View style={{marginHorizontal: 5}}>
                    <Icon
                      size={10}
                      name="eye"
                      type="font-awesome"
                      color={Colors.primary}
                    />
                  </View>
                  <Text style={styles.timeStampText}>245k</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 80,
    borderRadius: 5,
  },
  card: {
    backgroundColor: Colors.white,
    width: Layout.window.width * 0.95,
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: 2,
    padding: 5,
  },
  cardHeader: {
    alignItems: 'center',
  },
  cardContent: {
    padding: 1,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImageWrapper: {
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
    fontFamily: Font.PoppinsRegular,
    color: Colors.mutedText,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 10,
    width: 200,
    fontFamily: Font.PoppinsRegular,
    color: Colors.newsDescription,
  },
  seeMoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.primary,
  },
  timeStampWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeStampText: {
    fontSize: 10,
    fontFamily: Font.PoppinsRegular,
    color: Colors.mutedText,
  },
});
CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardItem;
