import React, { Component } from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ListsService from './App/services/ListsService';
import ListsView from './App/views/listsView';

class App extends Component{
  state = {
    lists: [],
    isLoading: false
  }
  async componentDidMount(){
    await this.getlists();
  }
  removeList = (listToRemove) => {
    const lists = this.state.lists.filter(list => list.id !== listToRemove.item.id);
    this.setState({lists});
    console.log(listToRemove.item.id)
    ListsService.remove(listToRemove.item.id);
  }
  getlists = async() => {
    this.setState({isLoading: true})
    const lists = await ListsService.list();
    console.log('****', lists)
    this.setState({lists, isLoading: false})
    return lists;
  }
  render(){
    const {state} = this;
    return (
      <View style={{borderColor: "red", borderWidth: 1, height: "100%"}}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={state.isLoading} onRefresh={this.getlists}/>
          }
        >
          <ListsView lists={this.state.lists} onRemove={this.removeList}/>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
