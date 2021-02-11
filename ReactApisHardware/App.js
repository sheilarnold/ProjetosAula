/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  AppState
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NetInfo from "@react-native-community/netinfo";
import Camera_Dialog from './app/components/CameraDialog';
import PictureList from './app/components/PictureList';

class App extends Component {
/*
  componentDidMount(){
    AppState.addEventListener('change', (nextState) => {
      console.log(nextState);
    })

    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
  }
*/
  state ={
    pictureList: [
      {id: '1', url: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'},
      {id: '2', url: 'https://catracalivre.com.br/wp-content/thumbnails/hzEEdZI4Jr1BQm4LzxzoSKe8hfU=/wp-content/uploads/2021/02/sarah-450x299.png'},
      {id: '3', url: 'https://static.vix.com/pt/sites/default/files/batom-vermelho-sarah-bbb_0221_1400x800_0.jpg'},
      {id: '4', url: 'https://www.einerd.com.br/wp-content/uploads/2021/02/sarah-e-drax-bbb-21.jpg'},
    ],
    isModalOpen: false,
  }

  onPictureSelect = (item) => {

  }

  openModal = () => {
    this.setState({isModalOpen: true})
  }

  closeModal = (response) => {
    this.setState({isModalOpen: false})
  }

  render() {
    const {state} = this;
    //console.warn(state)
    return (
      <View style={styles.container}>
        <PictureList onClick={this.onPictureSelect} list={state.pictureList}  />
        <View style={styles.footer}>
          <Button
            onPress={this.openModal}
            title="Nova Foto"
            color="#0062AC"
          />
        </View>
        <Camera_Dialog isOpen={state.isModalOpen} onClose={this.closeModal}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  footer:{
    padding: 15,
    backgroundColor: '#999999',
    width: "100%",
    textAlign: "center",
  }
});

export default App;
