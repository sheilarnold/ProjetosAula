import React from 'react';
import { Platform } from 'react-native';
import ip_server from './ip_server';

const lerFotos = async(callback) =>{
    if(Platform.OS == "ios")
        ip_server = "localhost";

    const fotosHTTP = await fetch(`http://${ip_server}:3030/feed`);
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
}

export default lerFotos;