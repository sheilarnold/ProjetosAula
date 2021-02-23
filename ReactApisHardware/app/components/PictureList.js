import React, {Component} from 'react';
import {View, Image, FlatList, TouchableHighlight, Text, Dimensions} from 'react-native';

class PictureList extends Component{
    static defaultProps = {
        list: [],
        onClick: () => {}
    }

    render(){
        //console.warn('aqui');
        const {props} = this;
        //console.warn(props);
        //console.warn("props");
        const keyExtractor = item => item.id;
        //console.warn(keyExtractor);
        return(
            <View style={{flex: 1}}>
                <FlatList
                    numColumns={3}
                    style={{borderColor:"red", borderWidth: 1}}
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={({item}) =>  <PictureListItem onClick={props.onClick} item={item}/>}
                />
            </View>
        )
    }

}

function PictureListItem(props){
    //console.warn('Pic')
    const {item} = props;
    const l_janela = Dimensions.get("window").width;
    return(
            //style={{width:"32%", height: 40,}}
        <TouchableHighlight onPress={() => {props.onClick(item)}}>
            <Image source={{uri: item.url}}
            style={{width: l_janela/3 - 8, height: l_janela/3 - 8, margin: 2}}
            />
        </TouchableHighlight>

    )
}

export default PictureList;