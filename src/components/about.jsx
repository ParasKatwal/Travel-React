import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// SCSS
import '../scss/about.scss'
// Bootstrap Components
import { Container, Image, Row, Col } from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about__header">
                    <div className="bg--overlay">
                        <Image src="assets/slide2.jpg" className="image--cover" />
                        <div className="landing__content index9">
                            <Container>
                                <h1>
                                    About Us
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.
                                </p>
                            </Container>
                        </div>
                    </div>
                </div>

                <div className="about__intro section--margin">
                    <Container>
                        <Row className="d-flex align-items-center">
                            <Col sm={12} md={6} className="intro__left section-title">
                                <div className="bg--text">
                                    <span>DISCOVER STORY</span>
                                    <h2>Our Story</h2>
                                    <h1>STORY</h1>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis enim a pariatur molestiae.
                                </p>
                            </Col>
                            <Col sm={12} md={6} className="intro__right">
                                <Image src="assets/traveler.png" />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="about__mission section--margin">
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <Image src="assets/hero_1.jpg" className="image--cover" />
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="section-title d-flex justify-content-center">
                                    <div className="bg--text">
                                        <span>OUR MISSION</span>
                                        <h2>Our Mission</h2>
                                        <h1>MISSION</h1>
                                    </div>
                                </div>
                                <div className="">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, animi praesentium. Molestiae quo tempore quas magni inventore quod cumque velit!</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
