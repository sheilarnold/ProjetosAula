import React, { Component, Fragment } from 'react';
import { Image, ScrollView, Dimensions, StyleSheet, FlatList} from 'react-native';
import {Cabecalho} from './src/components/cabecalho';

class App extends Component {

static defaultProps = {
  dados : [
    {id: '1', usuario: "Sheila C S Arnold"},
    {id: '2', usuario: "Mariana Nunes"},
    {id: '3', usuario: "Pietro Santos"},
    {id: '4', usuario: "Miguel Alcantra"},
  ]
}

  addItem = ({item, index}) => {
    return(
      <Fragment>
        <Cabecalho username={item.usuario}/>   
        <Image 
          source={require("./res/img/pub.jpeg")}
          style={styles.config_img}     
        />
      </Fragment>
    )
  }

  render(){
    const {props} = this;
    const keyExtractor = item => item.id;
    return(
      <ScrollView>
        <FlatList
          data={props.dados}
          keyExtractor={keyExtractor}
          renderItem={this.addItem}
        />
      </ScrollView>
    );
  }
  
}

const largura = Dimensions.get("screen").width;//largura da tela
const styles = StyleSheet.create({

  config_img:{
    width: largura, 
    height: largura,
  }

});

export default App;
