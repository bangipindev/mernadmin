import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from "../types";
  
import AuthService from "../../services/auth";
  
export const register = (form) => (dispatch) => {
    return AuthService.register(form).then(
        (response) => {
            console.log(response)
            dispatch({
                type: REGISTER_SUCCESS,
            });
    
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
    
            return Promise.resolve();
        },
        (error) => {
            const message =
                (
                    error.response &&
                    error.response.data &&
                    error.response.data.error
                ) ||
                    error.error ||
                    error.toString();
    
            dispatch({
                type: REGISTER_FAIL,
            });
    
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
  
export const login = (form) => (dispatch) => {
    return AuthService.login(form).then(
        (data) => {
            console.log(data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            dispatch({
                type: SET_MESSAGE,
                payload: "Berhasil Login",
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
            (
                error.response &&
                error.response.data &&
                error.response.data.error
            ) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};
  
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};
  