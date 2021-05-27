import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text, StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../layout/Colors';
import Font from "../../layout/Font";

class SkillList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: 'skill-set-item-01',
          title: 'Skill 1',
        },
        {
          id: 'skill-set-item-02',
          title: 'Skill 2',
        },
        {
          id: 'skill-set-item-03',
          title: 'Skill 3',
        },
        {
          id: 'skill-set-item-04',
          title: 'Skill 4',
        },
        {
          id: 'skill-set-item-05',
          title: 'Skill 5',
        },
        {
          id: 'skill-set-item-06',
          title: 'Skill 6',
        },
        {
          id: 'skill-set-item-07',
          title: 'Skill 7',
        },
        {
          id: 'skill-set-item-08',
          title: 'Skill 8',
        },
        {
          id: 'skill-set-item-09',
          title: 'Skill 9',
        },
        {
          id: 'skill-set-item-10',
          title: 'Skill 10',
        },
        {
          id: 'skill-set-item-11',
          title: 'Skill 11',
        },
        {
          id: 'skill-set-item-12',
          title: 'Skill 12',
        },
        {
          id: 'skill-set-item-13',
          title: 'Skill 13',
        },
        {
          id: 'skill-set-item-14',
          title: 'Skill 14',
        },
        {
          id: 'skill-set-item-15',
          title: 'Skill 15',
        },
        {
          id: 'skill-set-item-16',
          title: 'Skill 16',
        },
        {
          id: 'skill-set-item-17',
          title: 'Skill 17',
        },
        {
          id: 'skill-set-item-18',
          title: 'Skill 18',
        },
        {
          id: 'skill-set-item-19',
          title: 'Skill 19',
        },
        {
          id: 'skill-set-item-20',
          title: 'Skill 20',
        },
      ],
    };
  }
  _renderItem = item => {
    return (
      <View style={{margin: 5, width: 80}}>
        <View style={styles.row}>
          <View style={{marginHorizontal: 5}}>
            <FontAwesome name={'star'} size={12} color={Colors.primary} />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.skills}
          showsHorizontalScrollIndicator={false}
          numColumns={4}
          keyExtractor={item => item.id}
          renderItem={({item}) => this._renderItem(item)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.mutedText,
    fontWeight: 'bold',
  },
});
export default SkillList;
