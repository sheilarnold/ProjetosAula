import React, { Fragment, useState } from 'react';
import { Button, TextInput, View, Text } from "react-native";
import efetuar_login from '../../api/login';
import styles from './style';

const Login = () => {

    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const logar = async() => {
        //console.warn(username, senha);
        try{
            const token = await efetuar_login(username, senha);
            console.warn(token);
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

export default Login;