import React, { Component } from 'react';
import { StyleSheet, View, Button, } from 'react-native';

import Camera_Dialog from './app/components/CameraDialog';
import PictureList from './app/components/PictureList';
import AsyncStorage from '@react-native-community/async-storage';

import { StorageService } from './app/services/StorageService';
import { PictureService } from './app/services/PictureService';

class App extends Component {

  async componentDidMount(){    
    const pictureList = await StorageService.get('pictureList') || [];
    //console.log(pictureList);
    this.setState({pictureList});
  }

  limpar_fotos = async() => {
    //console.log('remove')
    await AsyncStorage.removeItem('pictureList');
    this.componentDidMount();
  }

  carregar_fotos = async() => {
    await StorageService.set('pictureList', [
      {id: '1', url: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'},
      {id: '2', url: 'https://catracalivre.com.br/wp-content/thumbnails/hzEEdZI4Jr1BQm4LzxzoSKe8hfU=/wp-content/uploads/2021/02/sarah-450x299.png'},
      {id: '3', url: 'https://static.vix.com/pt/sites/default/files/batom-vermelho-sarah-bbb_0221_1400x800_0.jpg'},
      {id: '4', url: 'https://www.einerd.com.br/wp-content/uploads/2021/02/sarah-e-drax-bbb-21.jpg'},
      {id: '5', url: 'https://www.educolorir.com/imagem-mona-lisa-dm17052.jpg'},
    ]);
    this.componentDidMount();
  }

  state ={
    pictureList: [],
    isModalOpen: false,
  }

  onPictureSelect = (item) => {
    PictureService.selectPicture(item, this.onRemove);
  }

  onRemove = async(item) => {
    console.log(item.id)
    const novaLista = this.state.pictureList.filter(item_lista => item_lista.id !== item.id);
    console.log(novaLista)
    await StorageService.set('pictureList', novaLista);
    this.setState({novaLista});
    this.componentDidMount();
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
      console.log(newItem);
      //console.log('p: ', pictureList);
      toUpdate.pictureList = pictureList;
      //console.log('tp: ', toUpdate.pictureList);
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
          <Button
            onPress={this.limpar_fotos}
            title="Limpar Fotos"
            color="gray"
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
