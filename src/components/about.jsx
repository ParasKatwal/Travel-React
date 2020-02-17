import React, { Component } from 'react'

// Bootstrap Components
import { Container, Jumbotron } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h2>ABOUT</h2>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}
