import {Alert} from 'react-native';
import fs from 'react-native-fs';
import NetworkService from './NertworkService';

export const PictureService ={
    async save(filePath){
        console.log(filePath);
        if(filePath.startsWith('http')){
            filepath = PictureService.saveRemote(filePath);
            console.log('+', filePath)
        }
        console.log('-', filePath);
        return filePath;
    },
    async saveRemote(fromUrl){
        console.log(fromUrl);
        const toFile = `${fs.DocumentDirectoryPath}/${Date.now}.png`;
        console.log(toFile);
        result = await fs.downloadFile({
            fromUrl,
            toFile
        });
        console.log(result);
        return 'file://' + toFile;
    },
    selectPicture(item, onRemoveCallback){
        Alert.alert('Minha imagem', item.id, [
            {
                text: "Compartilhar",
                onPress: () => PictureService.onShare(item),
            },
            {
                text: 'Apagar',
                onPress: () => onRemoveCallback(item)
            },
            {
                text: "Cancelar",
                style: 'cancel',
            },
        ],{
            cancelable: false,
        })
    },
    async onShare(item){
        const response = await NetworkService.share(item.url);
    }
}