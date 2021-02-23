import Share from "react-native-share";
import fs from 'react-native-fs';
import RNFetchBlob from "rn-fetch-blob";


const NetworkService = {
    async share(filepath){
        //const file = 'data:image/png;base64,'+(await fs.readFile(filepath, 'base64'));
        let file = null;
        let dadosFile = null;
        //console.log(filepath);

        RNFetchBlob.config({
            fileCache: true,
        }).fetch("GET", filepath).then((resp, base64data) => {
            console.log(base64data)
            //console.log(resp, ' \n ', resp.path());
            //console.log(resp);
            //file = resp.path();
            teste = JSON.stringify(resp);
            teste = JSON.parse(teste);
            //console.log(teste.base64)
            console.log('*', typeof(resp), teste.respInfo.headers.date, teste.respInfo.headers["content-type"])
            dadosFile = 'data:' + teste.respInfo.headers["content-type"] + ';base64,';
            console.log(dadosFile)
            return resp.readFile("base64")
        }).then(base64data => {
            //console.log('+', base64data);
            dadosFile += base64data;
            file = base64data;
            console.log('aqui')
            //console.log(dadosFile);
            //file = 'data:' + base64data;
            return fs.unlink(file)
        })

        console.log(dadosFile);
        console.log(file);
        
        const result = await Share.open({
            title:'Opa, compartilhou foi?',
            url: dadosFile,
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err)
        });
        return result;
    }
}

export default NetworkService;
/*
{"array": [Function anonymous], 
"base64": [Function anonymous], 
"blob": [Function anonymous], 
"data": "/data/user/0/com.reactapishardware/files/RNFetchBlobTmp_2h6naedyj2cdc5yhazh5v", 
"flush": [Function anonymous], "info": [Function anonymous], 
"json": [Function anonymous], 
"path": [Function anonymous], 
"readFile": [Function anonymous], 
"readStream": [Function anonymous], 
"respInfo": {
    "headers": {
        "age": "2256071", 
        "alt-svc": "h3-27=\":443\"; ma=86400, h3-28=\":443\"; ma=86400, h3-29=\":443\"; ma=86400", 
        "cache-control": "max-age=1382400, must-revalidate", "cf-bgj": "imgq:85,h2pri", 
        "cf-cache-status": "HIT", 
        "cf-polished": "degrade=85, origSize=319115", 
        "cf-ray": "625d5f833e4feeb2-GRU", 
        "cf-request-id": "086e3a05ff0000eeb2b7945000000001", 
        "content-disposition": "attachment; filename=\"mona-lisa-17052.jpg\"", 
        "content-type": "image/jpeg", 
        "date": "Tue, 23 Feb 2021 02:03:54 GMT", 
        "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"", 
        "front-end-https": "on", 
        "last-modified": "Sat, 26 Apr 2014 00:43:33 GMT", 
        "nel": "{\"report_to\":\"cf-nel\",\"max_age\":604800}", 
        "report-to": "{\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\
                /report?s=oO6a4eXSk3E6xQbc6%2B1Rblddz304DRLj67zjzkyo4XlDiBr8ybY0V4zvGADpaD8h%2FN
                7niXIuVD0LbLfjscSlzV7fmNvUMGbVCRz2PxYDrtO%2B66Y%3D\"}]}", 
        "server": "cloudflare", 
        "vary": "Accept", 
        "x-cache": "MISS colorpix-web2", 
        "x-cache-hits": "0"
    }, 
    "redirects": ["https://www.educolorir.com/imagem-mona-lisa-dm17052.jpg"], 
    "respType": "", 
    "rnfbEncode": "path", 
    "state": "2", 
    "status": 200, 
    "taskId": "2h6naedyj2cdc5yhazh5v", 
    "timeout": false}, 
    "session": [Function anonymous], 
    "taskId": "2h6naedyj2cdc5yhazh5v", 
    "text": [Function anonymous], 
    "type": "path"
}*/