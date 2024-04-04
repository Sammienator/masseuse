import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AiOutlineUser, AiOutlinePhone, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/App.css';

function BookingSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="booking" className="text-center">
      <h2 className="text-center mb-4" data-aos="fade-up">Make a Booking</h2>
      <Row>
        <Col  data-aos="fade-right">
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed malesuada dolor.
          </p>
          <Form  >
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
              <AiOutlineUser className="form-icon" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
              <AiOutlinePhone className="form-icon" />
            </Form.Group>
            <Form.Group controlId="formBasicItemCode">
              <Form.Label>Item Code</Form.Label>
              <Form.Control type="text" placeholder="Enter item code" />
              <BsFillGridFill className="form-icon" />
            </Form.Group>
            <Form.Group controlId="formBasicItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Enter item name" />
              <AiOutlineShoppingCart className="form-icon" />
            </Form.Group>
            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" />
            </Form.Group>
            <Button id='btn' variant="primary"  className='my-4 mx-4' type="submit">
              Book Now
            </Button>
          </Form>
        </Col>
      
      </Row>
    </Container>
  );
}

export default BookingSection;
