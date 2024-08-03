export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestion(questions) {
    return {
        type: RECEIVE_QUESTION,
        questions
    }
}

export function answerQuestion(user, questionId, answer) {
    return {
        type: ANSWER_QUESTION,
        user,
        questionId,
        answer
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}