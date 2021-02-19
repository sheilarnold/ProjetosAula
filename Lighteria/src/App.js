import React from 'react';
import { View } from 'react-native';
import ListaProdutos from './views/ListaProdutos';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "#F4F0F4",
        height: "100%"
      }}
    >      
      <ListaProdutos/>
    </View>
  );
};

export default App;
