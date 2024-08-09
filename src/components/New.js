import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";

import { saveQuestion } from "../actions/questions";

const New = ({marginTop}) => {
    const [firstOption, setFirstOption] = useState('');
    const [secondOption, setSecondOption] = useState('');
    const [error, setError] = useState('');
    const authorization = useSelector((state) => state.authorization);

    console.log(`state from New ${JSON.stringify(authorization)}`);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleQuestion = (e) => {
        e.preventDefault();
        dispatch(saveQuestion({optionOneText: firstOption, optionTwoText: secondOption, authorId: authorization.user.id}))
            .catch((error) => setError(error));
        navigate("/");
        setFirstOption("");
        setSecondOption("");
    };

    return (
        <Container style={{ marginTop: `${marginTop}px`}}>
            <h1 className="text-center">Would You Rather</h1>
            <h6 className="text-center">Create Your Own Poll</h6>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleQuestion}>
            <Form.Group controlId="formFirstOption">
                <Form.Label className="text-center w-100">First Option</Form.Label>
                <Form.Control
                    data-testid="firstoption"
                    value={firstOption}
                    onChange={(e) => setFirstOption(e.target.value)}
                    type="text" 
                    placeholder="Option One" 
                    required />
            </Form.Group>
            <Form.Group controlId="formSecondOption">
                <Form.Label className="text-center w-100">Second Option</Form.Label>
                <Form.Control
                    data-testid="secondoption"
                    value={secondOption}
                    onChange={(e) => setSecondOption(e.target.value)}
                    type="text" 
                    placeholder="Option Two" 
                    required />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
                <Button variant="secondary" disabled={firstOption ==="" && secondOption === ""} type="submit">Submit</Button>
            </div>
            </Form>
        </Container>
    )
}

export default New;