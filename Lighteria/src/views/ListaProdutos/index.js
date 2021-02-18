import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { DATA } from '../../utils/data';
import Cabecalho from './Componentes/cabecalho';

const ListaProdutos = ({}) => {
    const keyExtractor = item => item.id;
    return(
        <View>
            <FlatList
                numColumns={2}
                data={DATA}
                keyExtractor={keyExtractor}
                renderItem={({item}) =>  <View/>}
                ListHeaderComponent={<Cabecalho/>}
            />
        </View>
    );
};

export default ListaProdutos;