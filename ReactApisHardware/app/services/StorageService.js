//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const StorageService ={
    async get(key){
        console.log("get")
        return JSON.parse(await AsyncStorage.getItem(key));
    },
    async set(key, value){
        console.log("set")
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    }
}