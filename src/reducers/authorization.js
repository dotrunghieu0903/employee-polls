import { SET_AUTHED_USER } from "../actions/authorization";

export default function authorize(state = {}, action) {
    switch(action.type) {
        case SET_AUTHED_USER: 
            return action.id;
        default: 
            return state;
    }
}