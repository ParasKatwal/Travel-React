import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//SCSS
import '../scss/blog.scss';
// Bootstrap Components
import { Container, Image, Row, Col } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <div className="blog__header">
                    <div className="bg--overlay">
                        <Image src="assets/hero_1.jpg" className="image--cover img--overlay" />
                        <div className="landing__content index9">
                            <Container>
                                <h1>
                                    Our Blog
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.
                                </p>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className="blog__list--wrapper section--margin">
                    <Container>
                        <Row>
                            <Col sm={12} md={4} className="blog__item" >
                                <Link href="/blogDetail" to={'/blog/blogDetail'}>
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
                                </Link>
                            </Col>
                            <Col sm={12} md={4} className="blog__item" >
                                <a href="">
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
                                </a>
                            </Col>
                            <Col sm={12} md={4} className="blog__item" >
                                <a href="">
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
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
