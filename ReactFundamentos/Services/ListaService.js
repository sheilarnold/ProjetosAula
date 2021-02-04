import ApiService from './ApiService';
const endpoint = 'lista';

const ListaService = {
    
    list(){
        return ApiService.get(endpoint);
    },

    create(item){
        return ApiService.post(endpoint, item);
    },

    remove(id){
        return ApiService.delete(endpoint, id);
    }
}

export default ListaService;