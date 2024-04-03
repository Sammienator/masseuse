import React from 'react';
import { Col, Container, Row, Figure } from 'react-bootstrap';
import { FaSpa,  FaRegHeart } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS styles
import pic11 from '../assets/pic11.jpg'

const PricingSection = () => {
  return (
    <Container className="py-5">

      <h1 className='text-center'>
        Find our Prices Below
      </h1>

      <h2 className="text-center mb-4">Facials Treatment Prices</h2>
      <Row>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Facial treatment"
              src={pic11} // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Facials
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Basic Facial:</span> $40 (30 min)
            </li>
            <li>
              <span className="fw-bold">Deep Cleansing Facial:</span> $60 (45 min)
            </li>
            <li>
              <span className="fw-bold">Anti-Aging Facial:</span> $80 (60 min)
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Nail and body treatment"
              src="https://www.istockphoto.com/photos/massage" // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Nail & Body Treatments
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Manicure:</span> $30 (30 min)
            </li>
            <li>
              <span className="fw-bold">Pedicure:</span> $40 (45 min)
            </li>
            <li>
              <span className="fw-bold">Swedish Massage:</span> $60 (60 min)
            </li>
            <li>
              <span className="fw-bold">Deep Tissue Massage:</span> $80 (75 min)
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Detox cream"
              src="https://www.istockphoto.com/photos/cream" // Replace with your image URL
            />
            <Figure.Caption>
              <FaRegHeart className="text-primary fs-2 mb-2" /> Detox Creams & Lotions
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Detoxifying Cream:</span> $20 (4 oz)
            </li>
            <li>
              <span className="fw-bold">Slimming Lotion:</span> $25 (8 oz)
            </li>
            <li>
              <span className="fw-bold">Muscle Relief Cream:</span> $30 (4 oz)
            </li>
          </ul>
        </Col>
      </Row>




      <h2 className="text-center mb-4">Nail and Body Treatments</h2>
      <Row>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Facial treatment"
              src={pic11} // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Facials
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Basic Facial:</span> $40 (30 min)
            </li>
            <li>
              <span className="fw-bold">Deep Cleansing Facial:</span> $60 (45 min)
            </li>
            <li>
              <span className="fw-bold">Anti-Aging Facial:</span> $80 (60 min)
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Nail and body treatment"
              src="https://www.istockphoto.com/photos/massage" // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Nail & Body Treatments
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Manicure:</span> $30 (30 min)
            </li>
            <li>
              <span className="fw-bold">Pedicure:</span> $40 (45 min)
            </li>
            <li>
              <span className="fw-bold">Swedish Massage:</span> $60 (60 min)
            </li>
            <li>
              <span className="fw-bold">Deep Tissue Massage:</span> $80 (75 min)
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Detox cream"
              src="https://www.istockphoto.com/photos/cream" // Replace with your image URL
            />
            <Figure.Caption>
              <FaRegHeart className="text-primary fs-2 mb-2" /> Detox Creams & Lotions
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Detoxifying Cream:</span> $20 (4 oz)
            </li>
            <li>
              <span className="fw-bold">Slimming Lotion:</span> $25 (8 oz)
            </li>
            <li>
              <span className="fw-bold">Muscle Relief Cream:</span> $30 (4 oz)
            </li>
          </ul>
        </Col>
      </Row>

      <h2 className="text-center mb-4">Detox cream and lotions Treatment Prices</h2>
      <Row>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Facial treatment"
              src={pic11} // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Facials
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Basic Facial:</span> $40 (30 min)
            </li>
            <li>
              <span className="fw-bold">Deep Cleansing Facial:</span> $60 (45 min)
            </li>
            <li>
              <span className="fw-bold">Anti-Aging Facial:</span> $80 (60 min)
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Nail and body treatment"
              src="https://www.istockphoto.com/photos/massage" // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Nail & Body Treatments
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Manicure:</span> $30 (30 min)
            </li>
            <li>
              <span className="fw-bold">Pedicure:</span> $40 (45 min)
            </li>
            <li>
              <span className="fw-bold">Swedish Massage:</span> $60 (60 min)
            </li>
            <li>
              <span className="fw-bold">Deep Tissue Massage:</span> $80 (75 min)
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Detox cream"
              src="https://www.istockphoto.com/photos/cream" // Replace with your image URL
            />
            <Figure.Caption>
              <FaRegHeart className="text-primary fs-2 mb-2" /> Detox Creams & Lotions
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Detoxifying Cream:</span> $20 (4 oz)
            </li>
            <li>
              <span className="fw-bold">Slimming Lotion:</span> $25 (8 oz)
            </li>
            <li>
              <span className="fw-bold">Muscle Relief Cream:</span> $30 (4 oz)
            </li>
          </ul>
        </Col>
      </Row>


      
    </Container>
  );
};

export default PricingSection;
