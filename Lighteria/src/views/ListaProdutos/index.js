import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { DATA } from '../../utils/data';
import Cabecalho from './Componentes/cabecalho';
import Item from './Componentes/produto';

const ListaProdutos = ({}) => {

    renderItem = ({item, index}) => {
        return <Item titulo={item.titulo}
                    imagem={item.imagem}
                />
    }

    const keyExtractor = item => item.id;
    return(
        <View
            style={{
                marginHorizontal: 24
            }}
        >
            <FlatList
                numColumns={2}
                data={DATA}
                keyExtractor={keyExtractor}
                renderItem={this.renderItem}
                ListHeaderComponent={<Cabecalho/>}
            />
        </View>
    );
};

export default ListaProdutos;