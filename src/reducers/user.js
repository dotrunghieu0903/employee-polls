import { RECEIVE_USERS, ADD_ANSWER, ADD_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_QUESTION:
            return {
                ...state,
                //TODO
            };
        case ADD_ANSWER:
            return {
                ...state,
                //TODO
            };
        default:
            return state;
    }
}