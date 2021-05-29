import React from 'react';
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Layout from '../../layout/Layout';

import CardItem from './CardItem';

function TabItem({news}) {
  return (
    <View style={styles.center}>
      <View style={styles.adWrapper}>
        <Image
          style={styles.adImage}
          source={require('../../assets/images/news/ad.png')}
        />
      </View>
      <ScrollView
        style={{marginBottom: 100}}
        showsVerticalScrollIndicator={false}>
        {news.map((item, index) => {
          return <CardItem key={index.toString()} item={item} />;
        })}
      </ScrollView>
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
});
export default React.memo(TabItem);
