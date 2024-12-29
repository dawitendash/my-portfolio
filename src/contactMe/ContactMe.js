import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send an email or save the data)
        setSubmitted(true);
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center mb-4">Contact Me</h2>
                    {submitted ? (
                        <div className="alert alert-success" role="alert">
                            Thank you for your message! I'll get back to you as soon as possible.
                        </div>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Write your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
