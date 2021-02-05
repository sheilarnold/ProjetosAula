import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Foto_Perfil = ({foto}) => {
    return(
        <Image 
            source={{uri: foto}}
            style={styles.config_img}
        />
    );
}

export default Foto_Perfil;