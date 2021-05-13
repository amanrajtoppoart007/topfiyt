import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,FlatList} from 'react-native';
import SkillCheckBoxItem from './SkillCheckBoxItem';

class SkillCheckBoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: 'skill-set-item-01',
          title: 'Skill Set 1',
        },
        {
          id: 'skill-set-item-02',
          title: 'Skill Set 2',
        },
        {
          id: 'skill-set-item-03',
          title: 'Skill Set 3',
        },
        {
          id: 'skill-set-item-04',
          title: 'Skill Set 4',
        },
        {
          id: 'skill-set-item-05',
          title: 'Skill Set 5',
        },
        {
          id: 'skill-set-item-06',
          title: 'Skill Set 6',
        },
        {
          id: 'skill-set-item-07',
          title: 'Skill Set 7',
        },
        {
          id: 'skill-set-item-08',
          title: 'Skill Set 8',
        },
        {
          id: 'skill-set-item-09',
          title: 'Skill Set 9',
        },
        {
          id: 'skill-set-item-10',
          title: 'Skill Set 10',
        },
        {
          id: 'skill-set-item-11',
          title: 'Skill Set 11',
        },
        {
          id: 'skill-set-item-12',
          title: 'Skill Set 12',
        },
        {
          id: 'skill-set-item-13',
          title: 'Skill Set 13',
        },
        {
          id: 'skill-set-item-14',
          title: 'Skill Set 14',
        },
        {
          id: 'skill-set-item-15',
          title: 'Skill Set 15',
        },
        {
          id: 'skill-set-item-16',
          title: 'Skill Set 16',
        },
        {
          id: 'skill-set-item-17',
          title: 'Skill Set 17',
        },
        {
          id: 'skill-set-item-18',
          title: 'Skill Set 18',
        },
        {
          id: 'skill-set-item-19',
          title: 'Skill Set 19',
        },
        {
          id: 'skill-set-item-20',
          title: 'Skill Set 20',
        },
      ],
    };
  }
  _renderItem = item => {
    return <SkillCheckBoxItem item={item} />;
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
export default SkillCheckBoxList;
