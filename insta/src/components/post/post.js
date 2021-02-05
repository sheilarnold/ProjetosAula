import React, { Fragment, useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Cabecalho } from "../cabecalho";
import styles from './styles';

const Post = ({userName, userUrl, urlimgpost, descricao, likes}) => {
    const [curtiu, setCurtiu] = useState(false);
    const [like, setLikes] = useState(likes);

    const recalcula_likes = () => {
        let likes_recalculado = like;
        if(curtiu){        
            likes_recalculado--;
        }else{
            likes_recalculado++
        }
        setCurtiu(!curtiu);
        return setLikes(likes_recalculado);    
    }

    return(
        <Fragment>
            <Cabecalho username={userName} foto_perfil={userUrl}/> 
            <TouchableOpacity onPress={() => recalcula_likes()}>
                <Image 
                source={{uri: urlimgpost}}
                style={styles.config_img}     
                />
            </TouchableOpacity>

            <View style={styles.area_like}>
                <TouchableOpacity onPress={() => recalcula_likes()}>
                    <Image style={styles.like} source={verifica_like(curtiu)}/>
                </TouchableOpacity>
                <Text>{like} curtiu</Text>
            </View>  
            
            <Text >{userName}: {descricao}</Text>
      </Fragment>
    )
}

const verifica_like = (curtiu) => {
    if(curtiu){       
        return require("../../../res/img/like.png")
    }else{
      return require("../../../res/img/like2.png")
    }
}

export default Post;