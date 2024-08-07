import { getUsers } from "../servers/employee-polls-api";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        payload: users
    }
}

export function addAnswerWithUser(user, questionId, answer) {
    return {
        type: ADD_ANSWER,
        user,
        questionId,
        answer
    }
}

export function addQuestionWithUser(question) {
    return {
        type: ADD_QUESTION,
        user: question.author,
        id: question.id
    }
}

export const initData = createAsyncThunk('', async () => {
    const users = await getUsers();
    return users;
});