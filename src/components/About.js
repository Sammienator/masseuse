import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaRegClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUsSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="about" className="py-5">
      <h2 className="text-center mb-4" data-aos="fade-up">About Us</h2>
      <Row>
        <Col md={6} data-aos="fade-right">
          <div className="about-item">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <h3>Our Story</h3>
              <p>We are a team of experienced masseuses dedicated to providing top-notch services to our clients. Our journey began with a passion for wellness and relaxation, and we strive to create an oasis of tranquility for everyone who walks through our doors.</p>
            </div>
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="about-item">
            <div className="icon">
              <FaRegClock />
            </div>
            <div className="text">
              <h3>Our Mission</h3>
              <p>Our mission is to promote physical and mental well-being through therapeutic massages tailored to the unique needs of each individual. We believe in the power of touch to heal and rejuvenate, and we are committed to helping our clients achieve holistic wellness.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} data-aos="fade-right">
          <div className="about-item">
            <div className="text">
              <h3>Our Team</h3>
              <p>We have assembled a team of skilled and compassionate therapists who share our dedication to excellence. With years of experience in various massage techniques, our team members are experts in their field and are passionate about providing the highest quality care to our clients.</p>
            </div>
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="about-item">
            <div className="text">
              <h3>Our Values</h3>
              <p>At our core, we value integrity, professionalism, and genuine care for our clients' well-being. We are committed to creating a welcoming and inclusive environment where everyone feels valued and respected. Your satisfaction and comfort are our top priorities.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsSection;
