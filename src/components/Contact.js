import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

import pic44 from '../assets/pic44.jpg';

function ContactSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4" data-aos="fade-up">Contact Us</h2>
      <Row data-aos="fade-right">
        <Col md={6}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><FaMapMarkerAlt /> 123 Street Name, City, Country</p>
            <p><FaEnvelope /> info@example.com</p>
            <p><AiOutlineMail /> contact@example.com</p>
          </div>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="map" data-aos="fade-left">
            <h3>Our Location</h3>
            <iframe
              title="map"
              src={pic44}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
      <Row className="mt-5" data-aos="fade-up">
        <Col md={{ span: 6, offset: 3 }}>
          <h3 className="text-center mb-4">Subscribe to Our Newsletter</h3>
          <Form className='text-center mx-4'>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button className='align-center my-auto text-center' variant="primary" type="submit" block>
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactSection;
