import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import Layout from '../../layout/Layout';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import CardItem from './CardItem';

function TabItem({news}) {
  return (
    <View>
      <View style={{paddingVertical: 8, paddingHorizontal: 15,justifyContent:'center'}}>
        <Text style={styles.discussions}>Recent Discussions</Text>
      </View>

      <View style={styles.center}>
        <ScrollView
          style={{marginBottom: 100}}
          showsVerticalScrollIndicator={false}>
          {news.map((item, index) => {
            return <CardItem key={index.toString()} item={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  center: {flex: 1, width: Layout.window.width, alignItems: 'center'},
  adWrapper: {
    width: Layout.window.width * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adImage: {
    width: '100%',
    height: 100,
  },
  discussions: {
    fontSize: 12,
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
  },
});
export default React.memo(TabItem);
