import React from "react";

import HomePage from "./HomePage";
import { Container, Col, Row, Card } from 'react-bootstrap';

function Pages() {

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Start here</Card.Title>
                            <Card.Text>
                                Home Page
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8} className="mb-4">
                    <HomePage />
                </Col>
            </Row>
        </Container>
    )
}

export default Pages;