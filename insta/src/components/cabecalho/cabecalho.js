import React, { Fragment } from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import {Foto_Perfil} from '../foto/index'

const Cabecalho = ({username, foto_perfil}) => {
    return (
        <View style={styles.container}>            
            <Foto_Perfil foto={foto_perfil}/>
            <Text>{username}</Text>
        </View>
    );
}

export default Cabecalho;