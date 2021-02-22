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
  AppState,
  Clipboard,
  //AsyncStorage
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
import AsyncStorage from '@react-native-community/async-storage';

import fs from 'react-native-fs';
import { StorageService } from './app/services/StorageService';

class App extends Component {

  async componentDidMount(){
    /*AppState.addEventListener('change', (nextState) => {
      console.log(nextState);
    })

    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });*/

    //Clipboard.setString("Sheila");//Escreve string na área de transferencia
    //console.log(await Clipboard.getString());
    //await AsyncStorage.setItem('mytext', "Meu texto");
    //const value = await AsyncStorage.getItem('mytext');
    //console.log(value)
    //await AsyncStorage.setItem("mytext", "Community");
    //const value = await AsyncStorage.getItem('mytext');
    //console.log(value)
    //const path = fs.DocumentDirectoryPath + "/text.txt";
    //console.log(path);
    //fs.writeFile(path, "Texto dentro do arquivo", "utf8");
    //const arq = await fs.readFile(path, 'utf8');
    //console.log(arq);
    /*StorageService.set('pictureList', [
      {id: '1', url: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'},
      {id: '2', url: 'https://catracalivre.com.br/wp-content/thumbnails/hzEEdZI4Jr1BQm4LzxzoSKe8hfU=/wp-content/uploads/2021/02/sarah-450x299.png'},
      {id: '3', url: 'https://static.vix.com/pt/sites/default/files/batom-vermelho-sarah-bbb_0221_1400x800_0.jpg'},
      {id: '4', url: 'https://www.einerd.com.br/wp-content/uploads/2021/02/sarah-e-drax-bbb-21.jpg'},
    ])*/
    const pictureList = await StorageService.get('pictureList') || [];
    console.log(pictureList);
    this.setState({pictureList});
  }

  carregar_fotos = () => {
    StorageService.set('pictureList', [
      {id: '1', url: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'},
      {id: '2', url: 'https://catracalivre.com.br/wp-content/thumbnails/hzEEdZI4Jr1BQm4LzxzoSKe8hfU=/wp-content/uploads/2021/02/sarah-450x299.png'},
      {id: '3', url: 'https://static.vix.com/pt/sites/default/files/batom-vermelho-sarah-bbb_0221_1400x800_0.jpg'},
      {id: '4', url: 'https://www.einerd.com.br/wp-content/uploads/2021/02/sarah-e-drax-bbb-21.jpg'},
    ]);
    this.setState({isModalOpen: false})
  }

  state ={
    pictureList: [
      /*{id: '1', url: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'},
      {id: '2', url: 'https://catracalivre.com.br/wp-content/thumbnails/hzEEdZI4Jr1BQm4LzxzoSKe8hfU=/wp-content/uploads/2021/02/sarah-450x299.png'},
      {id: '3', url: 'https://static.vix.com/pt/sites/default/files/batom-vermelho-sarah-bbb_0221_1400x800_0.jpg'},
      {id: '4', url: 'https://www.einerd.com.br/wp-content/uploads/2021/02/sarah-e-drax-bbb-21.jpg'},*/
    ],
    isModalOpen: false,
  }

  onPictureSelect = (item) => {

  }

  openModal = () => {
    this.setState({isModalOpen: true})
  }

  closeModal = (response) => {
    const toUpdate = {
      isModalOpen: false
    }
    //this.setState({isModalOpen: false});
    if(typeof response == 'string'){
      const newItem = { id: (Date.now()).toString(), url: response },
      pictureList = [...this.state.pictureList, newItem];
      console.log('p: ', pictureList);
      toUpdate.pictureList = pictureList;
      console.log('tp: ', toUpdate.pictureList);
      StorageService.set('pictureList', pictureList);
    }

    this.setState(toUpdate);
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
          <Button
            onPress={this.carregar_fotos}
            title="Carregar Fotos"
            color="red"
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
