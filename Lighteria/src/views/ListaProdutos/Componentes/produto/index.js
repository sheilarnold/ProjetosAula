import React from 'react';
import { Image, Text, View } from 'react-native';

const Item = ({titulo, imagem}) =>{
    return(
        <View
            style={{
                height: 168,
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: 8,
            }}
        >
            <Image
                source={{uri: imagem}}
                resizeMode="contain"
                style={{
                    width: "100%", 
                    height: 84,
                }}
            />
            <Text
                style={{
                    marginTop: 8,
                    fontFamily: "OpenSans-SemiBold",
                    fontSize: 14,
                    color: "#848486",
                }}
            >
                {titulo}
            </Text>
        </View>
    )
}

export default Item;