import fs from 'react-native-fs';

export const PictureService ={
    async save(filePath){
        console.log(filePath);
        if(filePath.startsWith('http')){
            filepath = PictureService.saveRemote(filePath);
        }
        console.log(filePath);
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
    }
}