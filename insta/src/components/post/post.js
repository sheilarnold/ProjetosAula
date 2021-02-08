import React, { Fragment, useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Cabecalho } from "../cabecalho";
import styles from './styles';
import { recalcula_likes, verifica_like } from '../../api/curtidas';

const Post = ({userName, userUrl, urlimgpost, descricao, likes}) => {
    const [curtiu, setCurtiu] = useState(false);
    const [like, setLikes] = useState(likes);
  
    const curtiu_foto = () => {
        const [newState_curtiu, qtd] = recalcula_likes(curtiu, like);
        setLikes(qtd);
        setCurtiu(newState_curtiu);
    }

    return(
        <Fragment>
            <Cabecalho username={userName} foto_perfil={userUrl}/> 
            <TouchableOpacity onPress={() => curtiu_foto()}>
                <Image 
                source={{uri: urlimgpost}}
                style={styles.config_img}     
                />
            </TouchableOpacity>

            <View style={styles.area_like}>
                <TouchableOpacity onPress={() => curtiu_foto()}>
                    <Image style={styles.like} source={verifica_like(curtiu)}/>
                </TouchableOpacity>
                <Text>{like} curtiu</Text>
            </View>  
            
            <Text >{userName}: {descricao}</Text>
      </Fragment>
    )
}

export default Post;