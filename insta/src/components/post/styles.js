import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;//largura da tela
const styles = StyleSheet.create({

  config_img:{
    width: largura, 
    height: largura,
  },

  like: {
    width: 30,
    height: 30,
  },

  area_like:{
      flexDirection: "row",
      alignItems: "center",
  }

});

export default styles;