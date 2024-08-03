import { combineReducers } from "redux";

import authorize from "./authorization";
import users from "./user";
import questions from "./questions";

export default combineReducers({
    authorize,
    users,
    questions
});