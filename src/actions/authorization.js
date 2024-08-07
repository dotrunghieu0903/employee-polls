import { getUsers } from "../servers/employee-polls-api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function setAuthedUser(loggedInUser) {
    return {
        type: SET_AUTHED_USER,
        payload: loggedInUser
    }
}

export function loginRequest(username, password) {
    return {
        type: LOGIN_REQUEST,
        payload: {username, password}
    }
};

export function loginSuccess(user) {
    return {
        type: LOGIN_REQUEST,
        payload: user
    }
};

export function loginFailure(error) {
    return {
        type: LOGIN_REQUEST,
        payload: error
    }
};

export const login = (username, password) => {
    return async (dispatch) => {
        dispatch(loginRequest(username, password));
        try {
            const response = await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    const users = await getUsers();
                    
                    const user = findUserById(users, username)
                    if(user && user.password === password)
                    {
                        resolve(user);
                        //console.log(`user: ${JSON.stringify(user)}`)
                        dispatch(setAuthedUser(user));
                    } else {
                        reject(`Invalid credentials of ${username}`);
                    }
                }, 1000)
            })

            dispatch(loginSuccess(response));
        } catch (error) {
            dispatch(loginFailure(error));
        }
    }
}

function findUserById(users, id) { return  Object.values(users).find(user => user.id === id)}