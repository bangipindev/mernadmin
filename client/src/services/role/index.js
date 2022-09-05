import axios from 'axios'
import { API_URL } from '../../actions/types';
import TokenService from '../token';

class RoleService {

    getPublicContent() {
        return axios.get(API_URL + "all");
    }
    
    getRoleAdmin() {
        return axios.get(API_URL + "admin", { headers: TokenService() });
    }
    
}

export default RoleService