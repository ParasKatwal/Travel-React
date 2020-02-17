import React, { Component } from 'react'

// Bootstrap Components
import { Container, Jumbotron } from 'react-bootstrap';

export default class Trip extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h2>TRIP</h2>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}
