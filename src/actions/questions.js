export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

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

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}