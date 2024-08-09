import { createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestionsApi, saveQuestionAnswerApi, saveQuestionApi } from "../servers/employee-polls-api";

export const getQuestions = createAsyncThunk('question/getQuestions', async() => {
    return await getQuestionsApi();
})

export const saveQuestion = createAsyncThunk('question/saveQuestion', async(question) => {
    return await saveQuestionApi(question);
})

export const saveQuestionAnswer = createAsyncThunk('question/saveQuestionAnswer', async (authedUser, questionId, answer) => {
    return await saveQuestionAnswerApi(authedUser, questionId, answer);
})