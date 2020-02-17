import React, { Component } from 'react'
// SCSS
import '../scss/contact.scss'
// Bootstrap Components
import { Container, Image, Row, Col, Form, Button } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact__header">
                    <div className="bg--overlay">
                        <Image src="assets/hero_1.jpg" className="image-cover img--overlay" />
                        <div className="landing__content index9">
                            <Container>
                                <h1>
                                    Get In Touch
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.
                                </p>
                            </Container>
                        </div>
                    </div>
                </div>
                
                <div className="contact__form-wrapper section--margin">
                    <Container>
                        <div className="section-title d-flex justify-content-center text-center">
                            <div className="bg--text">
                                <span>CONTACT US</span>
                                <h2>Contact Us</h2>
                                <h1>CONTACT</h1>
                            </div>
                        </div>
                        <Row>
                            <Col sm={12} md={7}>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="">
                                            <Form.Control type="text" placeholder="Enter First Name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="">
                                            <Form.Control type="text" placeholder="Enter Last Name" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Control type="text" placeholder="Enter Email Address" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control as="textarea" rows="8" placeholder="Write Your Message" />
                                    </Form.Group>

                                    <Button className="button" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                            <Col sm={12} md={5} className="contact-details">
                                <h1>Contact Info</h1>
                                <div className="box">
                                    <p>Address: </p>
                                    <span>34 Street Name, City Name Here, United States</span>
                                </div>
                                <div className="box">
                                    <p>Phone: </p>
                                    <span>+977 ----------------</span>
                                </div>
                                <div className="box">
                                    <p>Email Address:</p>
                                    <span>example@gmail.com</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
