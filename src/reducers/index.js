import { combineReducers } from "redux";

import authorization from "./authorizationReducer";
import users from "./userReducer";
import questions from "./questionReducer";

const rootReducer = combineReducers({
    authorization,
    users,
    questions
});

export default rootReducer;