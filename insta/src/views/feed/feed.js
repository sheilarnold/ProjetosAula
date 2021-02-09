import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions, StyleSheet, 
        FlatList, StatusBar, View,
        Platform} from 'react-native';
import lerFotos from '../../api/feed';
import {Comentarios} from '../../components/comentarios';
import {Post} from '../../components/post';
import { recalcula_likes, verifica_like } from '../../api/curtidas';
import adicionar_comentario from '../../api/comentarios';

const Feed = () => {
     
  addItem = ({item, index}) => {
    return(
      <View>
      <Post
        userName={item.userName}
        userUrl={item.userURL}
        urlimgpost={item.url}
        descricao={item.description}
        likes={item.likes}
        recalcula_likes={recalcula_likes}
        verifica_like={verifica_like}
      />
      <Comentarios comentarios={item.comentarios} adicionar_comentario={adicionar_comentario}/>
      </View>
    )
  }

    const keyExtractor = item => item.id.toString();
    
    const [fotos, setFotos] = useState([]);
    useEffect(()=>{
      lerFotos(setFotos);
    }, []);
    
    let altura = 0;
    if(Platform.OS == "ios")
      altura=35;

    return(
      <ScrollView style={{marginTop:altura}}>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <FlatList
          data={fotos}
          keyExtractor={keyExtractor}
          renderItem={this.addItem}
        />
      </ScrollView>
    );

}
const largura = Dimensions.get("screen").width;//largura da tela
const styles = StyleSheet.create({

  config_img:{
    width: largura, 
    height: largura,
  },

  like: {
    width: 30,
    height: 30,
  }

});

export default Feed;
