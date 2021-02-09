import React, { Fragment, useState } from 'react';
import { Text, FlatList, View, TextInput, Image, Touchable, TouchableOpacity } from "react-native";
import styles from './styles';

const Comentarios = ({comentarios, adicionar_comentario}) => {
    
    const [coments, setComents] = useState(comentarios);
    
    const comentar = () => {
        //console.warn(comentario);
        campo_input.clear();
        const novo_comentario = adicionar_comentario({comentario: comentario, user: "Sheila"});
        
        setComents([...coments, novo_comentario]);
    }
    
    let comentario = "";
    let campo_input;
    return(
        <Fragment>
            <FlatList
                    data={coments}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <Text>{item.userName}: {item.text}</Text>}
            />
            <View style={styles.comentarios}>
                <TextInput
                    ref={texto_input => campo_input = texto_input}
                    onChangeText={texto_input => comentario = texto_input}
                    placeholder="Escreva um comentário!"
                    style={{flex:1}}
                />
                <TouchableOpacity onPress={comentar}>
                    <Image
                        source={require('../../../res/img/send.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}

export default Comentarios;