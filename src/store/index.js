import { configureStore } from "@reduxjs/toolkit";

import authorizationReducer from "../reducers/authorizationReducer";
import usersReducer from "../reducers/userReducer";
import questionsReducer from "../reducers/questionReducer";

export const store = configureStore({
    reducer: {
        authorization: authorizationReducer,
        users: usersReducer,
        questions : questionsReducer
    }
});
