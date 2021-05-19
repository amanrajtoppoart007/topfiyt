import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import CardItem from '../components/Agent/CardItem';
import Colors from '../layout/Colors';
import CustomStatusBar from '../components/CustomStatusBar';
import NavBar from '../components/NavBar';

class AgentListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [
        {
          name: 'Agent one',
          key: 'agent-item-one',
        },
        {
          name: 'Agent two',
          key: 'agent-item-two',
        },
        {
          name: 'Agent three',
          key: 'agent-item-three',
        },
        {
          name: 'Agent four',
          key: 'agent-item-four',
        },
        {
          name: 'Agent Five',
          key: 'agent-item-five',
        },
        {
          name: 'Agent Six',
          key: 'agent-item-six',
        },
        {
          name: 'Agent Seven',
          key: 'agent-item-seven',
        },
        {
          name: 'Agent Eight',
          key: 'agent-item-eight',
        },
        {
          name: 'Agent Nine',
          key: 'agent-item-nine',
        },
        {
          name: 'Agent Ten',
          key: 'agent-item-ten',
        },
        {
          name: 'Agent Eleven',
          key: 'agent-item-eleven',
        },
        {
          name: 'Agent Twelve',
          key: 'agent-item-twelve',
        },
        {
          name: 'agent thirteen',
          key: 'agent-item-thirteen',
        },
        {
          name: 'agent fourteen',
          key: 'agent-item-fourteen',
        },
        {
          name: 'agent fifteen',
          key: 'agent-item-fifteen',
        },
        {
          name: 'agent Sixteen',
          key: 'agent-item-sixteen',
        },
      ],
    };
  }

  _renderItem({item}) {
    return <CardItem item={item} />;
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
              data={this.state.agents}
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
});
export default AgentListScreen;
