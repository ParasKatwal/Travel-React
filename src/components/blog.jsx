import React, { Component } from 'react'

// Bootstrap Components
import { Container, Jumbotron } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h2>BLOG</h2>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}
