import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Container } from 'react-bootstrap';

import QuestionList from './QuestionList';
import { getQuestions } from '../actions/questions';

const DashBoard = ({marginTop}) => {
    const dispatch = useDispatch();
    const { authorization, status, questions } = useSelector(
        state => ({
            authorization: state.authorization,
            status:  state.questions.status,
            questions: state.questions
    }), shallowEqual);

    useEffect(() => {
        if(status === 'initial') { dispatch(getQuestions())}
    }, [status, dispatch]);

    // Done
    console.log(`state from DashBoard: Questions ${JSON.stringify(questions)}`)
    const questionIds = Object.keys(questions.questions);
    const newQuestionsArr = questionIds.map(qid => questions.questions[qid]); //due to wrapped object in questionSlice

    console.log(`state from DashBoard: newArr ${JSON.stringify(newQuestionsArr)}`)
    const answeredQuestions = newQuestionsArr.filter(
        (question) =>
            question.optionOne?.votes.includes(authorization.user.id)
            || question.optionTwo?.votes.includes(authorization.user.id)
    );

    console.log(`state from DashBoard: answerQuestions ${JSON.stringify(answeredQuestions)}`)

    const newQuestions = newQuestionsArr.filter(
        (question) =>
            !question.optionOne.votes.includes(authorization.user.id) &&
            !question.optionTwo.votes.includes(authorization.user.id)
    );
    console.log(`state from DashBoard: newQuestions ${JSON.stringify(newQuestions)}`)

    return (
        <Container style={{ marginTop: `${marginTop}px`}}>
            <h2>DashBoard</h2>
            <QuestionList title="New Questions" questions={newQuestions}/>
            <QuestionList title="Done" questions={answeredQuestions}/>
        </Container>
    )
}

export default DashBoard;