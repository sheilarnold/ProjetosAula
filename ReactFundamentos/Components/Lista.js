import React, {Component} from 'react';
import { FlatList, View, Text, Button } from 'react-native';

class Lista extends Component{

    static defaultProps = {
        lista: [{id : '1', text : 'abc'}, {id : '2', text : 'cde'}],
        removerItem: () => {}
    }

    addItem = ({item, index}) => {
        return(
            <View style={{flexDirection:'row', margin: 5}}>
                <Text style={{flex: 1}}>
                    {this.formatListaNumber(index)} - {item.text}
                </Text>
                <Button 
                    title="Remover" 
                    style={{width: 30}}
                    onPress={() => this.props.removerItem(item)}
                />
            </View>
        );
    }

    formatListaNumber(n){
        const d = 2;
        return ('0'.repeat(d) + (n + 1)).slice(-d);
    }

    render(){
    
        const {props} = this;
        const keyExtractor = item => item.id;

        return(
            <View>
                <FlatList
                    data={props.lista}
                    keyExtractor={keyExtractor}
                    renderItem={this.addItem}
                />
            </View>
        );
    }
}

export default Lista;