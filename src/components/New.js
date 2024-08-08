import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

import { saveQuestion } from "../actions/questions";

const New = () => {
    const [firstOption, setFirstOption] = useState('');
    const [secondOption, setSecondOption] = useState('');
    const [error, setError] = useState('');
    const authorId = useSelector((state) => state.authorization);

    console.log(`state from New ${JSON.stringify(authorId)}`);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePoll = (e) => {
        e.preventDefault();
        dispatch(saveQuestion({firstOption, secondOption, authorId}))
            .catch((error) => setError(error));
        navigate("/");
        setFirstOption("");
        setSecondOption("");
    };

    return (
        <div className="">
            <h1 className="text-center">Would You Rather</h1>
            <h6 className="text-center">Create Your Own Poll</h6>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handlePoll}>
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
                <Button variant="secondary" disabled={firstOption ==="" && secondOption === "" }>Submit</Button>
            </div>
            </Form>
        </div>
    )
}

export default New;