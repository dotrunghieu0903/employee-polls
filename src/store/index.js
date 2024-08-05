import { configureStore } from "@reduxjs/toolkit";

import authorize from "../reducers/authorization";
import users from "../reducers/user";
import questions from "../reducers/questions";

export const store = configureStore({
    reducer: {
        authorize,
        users,
        questions
    }
});
