const url = 'http://192.168.56.1:3002/api/ReactFundamentos/';

const ApiService = {
    
    get(endpoint){
        return fetch(`${url}${endpoint}`).then(response => response.json());
    },

    post(endpoint, data){
        console.log(endpoint);
        return fetch(`${url}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());
    },

    delete(endpoint, id){
        return fetch(`${url}${endpoint}?id=${id}`, {method: 'DELETE'}).then(response => response.json());
    }

}

export default ApiService;