import React from 'react';
import { Col, Container, Row, Figure } from 'react-bootstrap';
import { FaSpa,  FaRegHeart } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS styles
import pic11 from '../assets/pic11.jpg'
import AOS from 'aos';
import '../styles/App.css';


const PricingSection = () => {

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="py-5">

      <h1 className='text-center py-5'>
        Find our Prices Below
      </h1>

      <h2 className="text-center py-5 mb-4">Facials Treatment Prices</h2>
      <Row>
        <Col md={4} className="mb-3" data-aos="fade-left">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Facial treatment"
              src={pic11} // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary text-center fs-2 mb-2 mx-4" /> Facials
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
            <li>
              <span className="fw-bold">Basic Facial:</span> Kshs 4000 (30 min)
            </li>
           
           
          </ul>
        </Col>
        <Col md={4} className="mb-3" data-aos="fade-up">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Nail and body treatment"
              src={pic11} // Replace with your image URL
            />
             <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2 mx-4" /> Facials
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
          <li>
              <span className="fw-bold">Deep Cleansing Facial:</span> Kshs 6000/= (45 min)
            </li>
          
         
          </ul>
        </Col>
        <Col md={4} className="mb-3" data-aos="fade-right">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Detox cream"
              src={pic11} // Replace with your image URL
            />
             <Figure.Caption>
              <FaSpa className="text-primary text-center mx-4 fs-2 mb-2" /> Facials
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
        
          <li>
              <span className="fw-bold">Anti-Aging Facial:</span> Ksh8000 (60 min)
            </li>
          </ul>
        </Col>
      </Row>




      <h2 className="text-center py-5 mb-4">Nail and Body Treatments</h2>
      <Row>
        <Col md={4} className="mb-3" data-aos="fade-left">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Facial treatment"
              src={pic11} // Replace with your image URL
            />
           <Figure.Caption>
              <FaRegHeart className="text-primary mx-2 fs-2 mb-2" /> Nail & Body Treatments
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
          <li>
              <span className="fw-bold">Swedish Massage:</span> Kshs 6000/= (60 min)
            </li>
        
          </ul>
        </Col>
        <Col md={4} className="mb-3" data-aos="fade-up">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Nail and body treatment"
              src={pic11} // Replace with your image URL
            />
           <Figure.Caption>
              <FaRegHeart className="text-primary mx-2 fs-2 mb-2" /> Nail & Body Treatments
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
         
           
            <li>
              <span className="fw-bold">Manicure:</span> Kshs 3000/= (30 min)
            </li>
            <li>
              <span className="fw-bold">Pedicure:</span> Kshs 4000/= (45 min)
            </li>
            
          </ul>
        </Col>
        <Col md={4} className="mb-3" data-aos="fade-right">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Detox cream"
              src={pic11} // Replace with your image URL
            />
            <Figure.Caption>
              <FaRegHeart className="text-primary mx-2 fs-2 mb-2" /> Nail & Body Treatments
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
           
          <li>
              <span className="fw-bold">Deep Tissue Massage:</span> Kshs 8000/= (75 min)
            </li>
          </ul>
        </Col>
      </Row>

      <h2 className="text-center py-5 mb-4">Detox cream and lotions Treatment Prices</h2>
      <Row>
        <Col md={4} className="mb-3" data-aos="fade-left">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Facial treatment"
              src={pic11} // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Detox cream and lotions
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
          <li>
              <span className="fw-bold">Detoxifying Cream:</span> Kshs 2000/= (4ml)
            </li>
            
          </ul>
        </Col>
        <Col md={4} className="mb-3" data-aos="fade-up">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Nail and body treatment"
              src={pic11} // Replace with your image URL
            />
            <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Detox cream and lotions
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
          <li>
              <span className="fw-bold">Slimming Lotion:</span> Kshs 2500/= (800ml )
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-3" data-aos="fade-right">
          <Figure>
            <Figure.Image
              width={175}
              height={150}
              alt="Detox cream"
              src={pic11} // Replace with your image URL
            />
             <Figure.Caption>
              <FaSpa className="text-primary fs-2 mb-2" /> Detox cream and lotions
            </Figure.Caption>
          </Figure>
          <ul className="list-unstyled mt-3 mb-0">
      
            <li>
              <span className="fw-bold">Muscle Relief Cream:</span> Kshs 3000/= (1000ml)
            </li>
          </ul>
        </Col>
      </Row>


      
    </Container>
  );
};

export default PricingSection;
