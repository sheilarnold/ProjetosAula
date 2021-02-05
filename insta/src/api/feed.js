import React from 'react';
import ip_server from './ip_server';

const lerFotos = async(callback) =>{
    const fotosHTTP = await fetch(`http://${ip_server}:3030/feed`);
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
}

export default lerFotos;