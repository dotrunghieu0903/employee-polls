import { configureStore } from "@reduxjs/toolkit";

import authorize from "../reducers/authorization";
import usersReducer from "../reducers/userReducer";
import questions from "../reducers/questions";

export const store = configureStore({
    reducer: {
        authorize,
        users: usersReducer,
        questions
    }
});
