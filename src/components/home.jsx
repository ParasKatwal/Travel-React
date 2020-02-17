import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// SCSS
import '../scss/home.scss'
// Bootstrap Components
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="header">
                    <Carousel className="header__slide">
                        <Carousel.Item>
                            <img
                            className=""
                            src="assets/slide1.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className=""
                            src="assets/slide2.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="header__content">
                        <Container>
                            <h1>
                                Let's Enjoy The Wonders of Nature
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.
                            </p>
                            <a href=""><i className="fas fa-play"></i>Watch the video</a>
                        </Container>
                    </div>
                </div>

                <div className="intro">
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
                
                <div className="package">
                    <div className="section-title d-flex justify-content-center text-center">
                        <div className="bg--text">
                            <span>JOURNEY</span>
                            <h2>Your Journey Starts Here</h2>
                            <h1>JOURNEY</h1>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col sm={12} md={4} className="package__item">
                                <Image src="assets/p1.png" />
                                <div className="package__item__info d-flex align-items-center flex-column ">
                                    <a className="price" href="">$200</a>
                                    <a className="place" href="">Dignissimos debitis</a>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="package__item">
                                <Image src="assets/p2.png" />
                                <div className="package__item__info d-flex align-items-center flex-column ">
                                    <a className="price" href="">$200</a>
                                    <a className="place" href="">Dignissimos debitis</a>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="package__item">
                                <Image src="assets/p3.png" />
                                <div className="package__item__info d-flex align-items-center flex-column ">
                                    <a className="price" href="">$200</a>
                                    <a className="place" href="">Dignissimos debitis</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                <div className="team">
                    <div className="section-title d-flex justify-content-center text-center">
                        <div className="bg--text">
                            <span>AMAZING STAFF</span>
                            <h2>Meet Our Team</h2>
                            <h1>OUR TEAM</h1>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col sm={12} md={4} className="team__member">
                                <Image src="assets/person1.png" />
                                <div className="info"> 
                                    <h3 className="name">John Doe</h3>
                                    <span className="position">STAFF</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                                </div>
                                <div className="social-media">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="team__member">
                                <Image src="assets/person1.png" />
                                <div className="info"> 
                                    <h3 className="name">John Doe</h3>
                                    <span className="position">STAFF</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                                </div>
                                <div className="social-media">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="team__member">
                                <Image src="assets/person1.png" />
                                <div className="info"> 
                                    <h3 className="name">John Doe</h3>
                                    <span className="position">STAFF</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                                </div>
                                <div className="social-media">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            
                <div className="blog">
                    <div className="section-title d-flex justify-content-center text-center">
                        <div className="bg--text">
                            <span>UPDATES</span>
                            <h2>Our Blog</h2>
                            <h1>BLOG</h1>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col sm={12} md={4} className="blog__item" >
                                <Image className="blog__item__img" src="assets/p1.png" />
                                <div className="blog__content-wrapper">
                                    <a href="" className="blog__item__title">Lorem ipsum dolor sit amet</a>
                                    <div className="blog__item__info">
                                        <span className="date">July 17, 2019 by</span>
                                        <span className="user">Admin</span>
                                    </div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.
                                    </p>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="blog__item" >
                                <Image className="blog__item__img" src="assets/p3.png" />
                                <div className="blog__content-wrapper">
                                    <a href="" className="blog__item__title">Lorem ipsum dolor sit amet</a>
                                    <div className="blog__item__info">
                                        <span className="date">July 17, 2019 by</span>
                                        <span className="user">Admin</span>
                                    </div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.
                                    </p>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="blog__item" >
                                <Image className="blog__item__img" src="assets/p2.png" />
                                <div className="blog__content-wrapper">
                                    <a href="" className="blog__item__title">Lorem ipsum dolor sit amet</a>
                                    <div className="blog__item__info">
                                        <span className="date">July 17, 2019 by</span>
                                        <span className="user">Admin</span>
                                    </div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
