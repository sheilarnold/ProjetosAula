import React, { Component } from 'react';
import { Dimensions, Image, Text, TouchableHighlight, View } from 'react-native';

class SimpleList extends Component{
    static defaultProps = {
        list: {},
        onRemove: () => {}
    }
    
    render(){
        const {props} = this,
        {list} = props,
        {width} = Dimensions.get("window"),
        picture = list.item.picture || 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg';

        return(
            <View
                style={{width: (width/ 3 - 8), margin: 2, marginBottom: 30, borderWidth: 1, borderColor:"#AAAAAA", padding: 5, position: "relative"}}
            >
                <TouchableHighlight onPress={() => {props.onRemove(props.list)}} style={{position: "absolute", right: 0, top: 0, zIndex: 2}}>
                    <Text style={{backgroundColor: "red", color: "white", padding: 5}}>X</Text>
                </TouchableHighlight>
                <Image source={{uri:picture}} style={{height: (width/ 3 - 8), width: (width/ 3 - 8)}}/>
                <Text style={{fontWeight: 'bold'}}>
                    {list.item.title}
                </Text>
            </View>
        )
    }
}
export default SimpleList;