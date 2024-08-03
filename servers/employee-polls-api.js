import {
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA.js"

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(user, questionId, answer) {
    return _saveQuestionAnswer(user, questionId, answer);
}