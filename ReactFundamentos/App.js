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
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TextCounter from './TextCounter';
import Lista from './Components/Lista';
import Form from './Components/Form';

import ListaService from './Services/ListaService';

export default class App extends Component {
    
    state = {
      lista: []
    }

    async componentDidMount(){
      const lista_atualizada = ListaService.list();
      this.setState({lista_atualizada});
    }

    add = (text) => {
      const novo_item = ListaService.create({text});
      const list = [...this.state.lista, novo_item];
      this.setState({list});
    }

    remove = (item) => {
      ListaService.remove(item.id);
      const new_list = this.state.lista.filter(itemList => itemList.id !== item.id);
      this.setState({new_list});
    }

  render(){
    const {state} = this;
    return (
      <View>
        <Form onAdd={this.add} />
        <Lista lista={state.lista} removerItem={this.remove} />
      </View>
    );
  };
}

