import { createSlice } from '@reduxjs/toolkit';
import { getQuestions, saveQuestion, saveQuestionAnswer } from '../actions/questions';

// import { RECEIVE_QUESTION, ANSWER_QUESTION, ADD_QUESTION } from "../actions/questions";

// export default function questions(state = {}, action) {
//     switch(action.type) {
//         case RECEIVE_QUESTION:
//             return {
//                 ...state,
//                 ...action.questions
//             };
//         case ANSWER_QUESTION:
//             return {
//                 ...state,
//                 //TODO
//             };
//         case ADD_QUESTION:
//             return {
//                 ...state,
//                 [action.question.id]: action.question
//             };
//         default: 
//             return state;
//     }
// }

const pollsSlice = createSlice({
    name: "polls",
    initialState: {
        questions: {},
        status: "inactive"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(saveQuestion.fulfilled, (state, action) => {
            state.questions[action.payload.id] = action.payload;
        })
        .addCase(saveQuestionAnswer.fulfilled, (state, action) => {
            const { authedUser, questionId, answer} = action.meta.arg;
            state.questions[questionId][answer].votes.push(authedUser.id)
        })
        .addCase(getQuestions.fulfilled, (state, action) => {
            state.questions = action.payload;
            state.status = "success"
        });
    }
});

export default pollsSlice.reducer;