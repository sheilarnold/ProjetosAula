import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import SimpleList from '../compents/SimpleList';

class ListsView extends Component{
    static defaultProps = {
        lists: []
    }
    
    render(){
        const {props} = this,
        {lists} = props;
        return(
            <View
                style={{
                    flex:1
                }}
            >
                <FlatList
                    data={lists}
                    keyExtractor={item => item.id}
                    renderItem={(item) => <SimpleList list={item} />}
                    numColumns={3}
                />
            </View>
        )
    }
}
export default ListsView;