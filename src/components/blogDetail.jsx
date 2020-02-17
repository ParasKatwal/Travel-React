import React, { Component } from 'react';
//SCSS
import '../scss/blog.scss';
// Bootstrap Components
import { Container, Image, Row, Col } from 'react-bootstrap';
export default class blogDetail extends Component {
    render() {
        return (
            <div className="blog-detail">
                <div className="blog-detail__header">
                    <Image src="assets/hero_1.jpg" />
                </div>
            </div>
        )
    }
}
