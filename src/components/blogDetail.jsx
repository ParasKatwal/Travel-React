import React, { Component } from 'react';
//SCSS
import '../scss/blog.scss';
// Bootstrap Components
import { Container, Image, Row, Col } from 'react-bootstrap';
import hero_1 from '../images/hero_1.jpg'

export default class blogDetail extends Component {
    render() {
        return (
            <div className="blog-detail">
                <div className="blog-detail__header">
                    <Image src={hero_1} className="image--cover" />
                </div>
            </div>
        )
    }
}
