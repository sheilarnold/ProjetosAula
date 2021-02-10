import AsyncStorage from '@react-native-community/async-storage';
import React, { Fragment, useState } from 'react';
import { Button, TextInput, View, Text } from "react-native";
import efetuar_login from '../../api/login';
import styles from './style';

const Login = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const logar = async() => {
        //console.warn(username, senha);
        try{
            const token = await efetuar_login(username, senha);
            const token_username = "token_" + username;
            await AsyncStorage.setItem(token_username, token);
            navigation.replace("Feed", {username: username});
        }catch(e){
            setErro(e.message);
        }
    }

    return(
        <Fragment>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="UserName"
                    onChangeText={texto => setUsername(texto)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={texto => setSenha(texto)}
                />
                <Text>{erro}</Text>
            </View>
            <View style={styles.btn}>
                <Button
                    title="Login"
                    onPress={logar}                
                />
            </View>
        </Fragment>
    )
}

Login.navigationOptions = () => {
  
    const opcoes = {
      header: null
    }
  
    return opcoes;
}

export default Login;