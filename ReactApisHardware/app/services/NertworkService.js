import Share from "react-native-share";
import fs from 'react-native-fs';
import RNFetchBlob from "rn-fetch-blob";


const NetworkService = {
    async share(filepath){
        //const file = 'data:image/png;base64,'+(await fs.readFile(filepath, 'base64'));
        let file = null;
        let dadosFile = null;
        let result = null;

        RNFetchBlob.config({
            fileCache: true,
        }).fetch("GET", filepath).then((resp) => {
            //console.log(resp, ' \n ', resp.path());
            //console.log(resp);
            //file = resp.path();
            teste = JSON.stringify(resp);
            teste = JSON.parse(teste);
            //console.log(teste.base64)
            dadosFile = 'data:' + teste.respInfo.headers["content-type"] + ';base64,';
            return resp.readFile("base64")
        }).then(async base64data => {
            //console.log('+', base64data);
            dadosFile += base64data;
            file = base64data;
            //console.log(dadosFile);
            //file = 'data:' + base64data;
            result = await Share.open({
                title:'Opa, compartilhou foi?',
                url: dadosFile,
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err)
            });

            //return fs.unlink(file)
            return result;
        })

        /*
        const result = await Share.open({
            title:'Opa, compartilhou foi?',
            url: dadosFile,
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err)
        });*/

        return result;
    }
}

export default NetworkService;
