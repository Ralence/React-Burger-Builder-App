import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userID) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        userID
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userID');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    };
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaPISKhI8wmE9-WlzHvgSGx2Ae_ZKW3lk';
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaPISKhI8wmE9-WlzHvgSGx2Ae_ZKW3lk';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const idToken = response.data.idToken;
                const userID = response.data.localId;
                const expiresIn = response.data.expiresIn;
                const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

                localStorage.setItem('token', idToken);
                localStorage.setItem('userID', userID);
                localStorage.setItem('expirationDate', expirationDate);

                dispatch(authSuccess(idToken, userID));
                dispatch(checkAuthTimeout(expiresIn));
            })
            .catch(err => {
                console.log(err.response);
                const errorData = err.response.data.error;
                dispatch(authFail(errorData));
            })
    };
};

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');

        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate > new Date()) {
                const userID = localStorage.getItem('userID');
                dispatch(authSuccess(token, userID));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            } else {
                dispatch(logout());
            }
        }
    }
}