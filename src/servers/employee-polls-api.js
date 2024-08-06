import {
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA.js"

export async function getUsers() {
    try {
        const fetchedUser = await _getUsers();
        console.log(fetchedUser);
        return fetchedUser;
    } catch (err) {
        console.log(`Error while fetching the users : ${err}`);
    }
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(user, questionId, answer) {
    return _saveQuestionAnswer(user, questionId, answer);
}