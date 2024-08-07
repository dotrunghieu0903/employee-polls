import { configureStore } from "@reduxjs/toolkit";

import authorize from "../reducers/authorization";
import usersReducer from "../reducers/userReducer";
import questionsReducer from "../reducers/questionReducer";

export const store = configureStore({
    reducer: {
        authorize,
        users: usersReducer,
        questions : questionsReducer
    }
});
