import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const NewPostModal = (props) => {
    const [text, setText] = useState("");
    const [show, setShow] = useState(true);
    function handleChange(event) {
        setText(event.target.value);
    }
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton onClick={() => setShow(false)}>
                <Modal.Title>Create New Post</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="How this song makes you feel?"
                    value={text}
                    onChange={handleChange}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={props.onSubmit}>
                    Submit Post
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewPostModal;
