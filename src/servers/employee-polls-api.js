import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA.js"

export async function getUsers() {
    try {
        const fetchedUser = await _getUsers();
        return fetchedUser;
    } catch (err) {
        console.log(`Error while fetching the users : ${err}`);
    }
}

export async function getQuestions() {
    try {
        return await _getQuestions();
    } catch (err) {
        console.log(`Error while fetching the questions : ${err}`);
    }
}

export function saveQuestionApi(question) {
    try {
        return _saveQuestion(question);
    } catch (err) {
        console.log(`Error while saving the questions : ${err}`);
    }
}

export function saveQuestionAnswerApi(user, questionId, answer) {
    try {
        return _saveQuestionAnswer(user, questionId, answer);
    } catch (err) {
        console.log(`Error while saving the answer of questions : ${err}`);
    }
}