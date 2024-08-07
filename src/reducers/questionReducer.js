import { createSlice } from '@reduxjs/toolkit';
import { saveQuestion } from '../actions/questions';

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
    }
});

export default pollsSlice.reducer;