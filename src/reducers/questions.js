import { RECEIVE_QUESTION, ANSWER_QUESTION, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTION:
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                //TODO
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        default: 
            return state;
    }
}