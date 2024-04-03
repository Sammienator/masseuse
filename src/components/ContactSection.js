import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactSection() {
  return (
   
      <Container id="contact" className="py-5">
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>Fill out the form below to get in touch.</p>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2>Subscribe to our Newsletter</h2>
            <p>Stay up to date with our latest offers and news.</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default ContactSection;
