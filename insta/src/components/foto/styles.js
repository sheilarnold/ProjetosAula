import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width / 10;//laargura da tela

const styles = StyleSheet.create({

    config_img:{
      width: largura, 
      height: largura,
      margin: 10,
      borderRadius: 30,
    },

});

export default styles;