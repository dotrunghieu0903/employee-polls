export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGIN_REQUEST = "LOGIN_REQUEST";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export const loginRequest = (username, password) => ({
    type: LOGIN_REQUEST,
    payload: {username, password}
});