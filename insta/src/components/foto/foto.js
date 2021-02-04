import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Foto_Perfil = () => {
    return(
        <Image 
            source={require("../../../res/img/capitu.jpg")}
            style={styles.config_img}
        />
    );
}

export default Foto_Perfil;