import axios from "axios";

const url = "http://192.168.0.103:3002/api/react-native/";

const ApiService = {
    
    async get(endpoint){
        return fetch(`${url}${endpoint}`).then(response => response.json());
    },

    post(endpoint, data){
        return fetch(`${url}${endpoint}`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json());
    },

    put(endpoint, data){
        return fetch(`${url}${endpoint}?id=${data.id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }).then(response => response.json());
    },

    delete(endpoint, id){
        return fetch(`${url}${endpoint}?id=${id}`, {
            method: 'DELETE'
        }).then(response => response.json());
    }

}

export default ApiService;
