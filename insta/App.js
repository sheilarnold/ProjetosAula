import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions, StyleSheet, FlatList, Text, TouchableOpacity, View} from 'react-native';
import lerFotos from './src/api/feed';
import { Comentarios } from './src/components/comentarios';
import Post from './src/components/post/post';

const App = () => {
  
  addItem = ({item, index}) => {
    return(
      <View>
      <Post
        userName={item.userName}
        userUrl={item.userURL}
        urlimgpost={item.url}
        descricao={item.description}
        likes={item.likes}
      />
      <Comentarios comentarios={item.comentarios}/>
      </View>
    )
  }

    const keyExtractor = item => item.id.toString();
    
    const [fotos, setFotos] = useState([]);
    useEffect(()=>{
      lerFotos(setFotos);
    }, []);
    
    return(
      <ScrollView>
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

export default App;
