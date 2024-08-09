import { Link } from 'react-router-dom';

const QuestionList = ({title, questions}) => {
    console.log(`state of QuestionList ${JSON.stringify(questions)}`);
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {Object.values(questions).map((question) => (
                    <li key={question.id}>
                        <Link to={`/questions/${question.id}`}>{question.optionOne.text} or {question.optionTwo.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuestionList;