import axios from "axios";
import { API_URL } from "../../actions/types";

class AuthService {
    login(form) {
        return axios
        .post(API_URL + "login", form)
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(form) {
        return axios.post(
            API_URL + "register",form
        );
      
    }
}

export default new AuthService();
