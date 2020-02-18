import React, { Component } from 'react';
//SCSS
import '../scss/blog.scss';
// Bootstrap Components
import { Container, Image, Row, Col } from 'react-bootstrap';
import hero_1 from '../images/hero_1.jpg'

import person1 from '../images/person1.png'

export default class blogDetail extends Component {
    render() {
        return (
            <div className="blog-detail">
                <div className="blog-detail__header">
                    <div className="bg--overlay">
                        <Image src={hero_1} className="image--cover" />
                        <div className="landing__content index9">
                            <Container>
                                <div className="date">
                                    <span>Sep 20, 2020</span>
                                    <span>|</span>
                                    <span>by James Miller</span>
                                </div>
                                <h1>
                                    Blog Title
                                </h1>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className="blog-detail__body section--margin">
                    <Container>
                        <Row>
                            <Col sm={12} md={9}>
                                <h3 className="blog-detail__body__heading">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                </h3>
                                <div className="blog-detail__body__content">
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                </div>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className="author">
                                    <Image src={person1} roundedCircle />
                                    <h6>About The Author</h6>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    <button className="button">Read More</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
