import React, { Component } from 'react'
import '../scss/footer.scss'

// Bootstrap Components
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={12} md={4} className="instagram">
                            <h6>Instagram</h6>
                            <Container>
                                <Row>
                                    <Col sm={4}>
                                        <Image src="assets/p1.png" />
                                    </Col>
                                    <Col sm={4}>
                                        <Image src="assets/p2.png" />
                                    </Col>
                                    <Col sm={4}>
                                        <Image src="assets/p3.png" />
                                    </Col>
                                    <Col sm={4}>
                                        <Image src="assets/p3.png" />
                                    </Col>
                                    <Col sm={4}>
                                        <Image src="assets/p2.png" />
                                    </Col>
                                    <Col sm={4}>
                                        <Image src="assets/p1.png" />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                        <Col sm={12} md={4} className="quick-link">
                            <h6>Quick Links</h6>
                            <div>
                                <a href="">About us</a>
                                <a href="">Testimonials</a>
                                <a href="">Privacy</a>
                                <a href="">Terms of Service</a>
                                <a href="">Contact Us</a>
                            </div>
                        </Col>

                        <Col sm={12} md={4} className="newsletter">
                            <h6>Newsletter</h6>
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio iure animi ullam quam, deleniti rem!
                                </p>
                                <form>
                                    <input type="text" placeholder="Email" />
                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
