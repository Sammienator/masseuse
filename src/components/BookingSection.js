import React from 'react';
import { Container,Button, Form,  } from 'react-bootstrap';

function BookingSection() {
  return (
          
      <Container id="booking" className="py-5">
        <h2>Book Now</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formBasicItemCode">
            <Form.Label>Item Code</Form.Label>
            <Form.Control type="text" placeholder="Enter item code" />
          </Form.Group>
          <Form.Group controlId="formBasicItemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter item name" />
          </Form.Group>
          <Form.Group controlId="formBasicQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Enter quantity" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Book
          </Button>
        </Form>

      </Container>
    
  );
}

export default BookingSection;
