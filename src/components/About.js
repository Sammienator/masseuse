import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaRegClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/App.css';

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
              <h3>My Story</h3>
              <p>I am an experienced masseuses dedicated to providing top-notch services to all my clients. My journey began with a passion for wellness and relaxation, and I strive to create an oasis of tranquility for everyone who walks through my doors.</p>
            </div>
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="about-item">
            <div className="icon">
              <FaRegClock />
            </div>
            <div className="text">
              <h3>My Mission</h3>
              <p>My mission is to promote physical and mental well-being through therapeutic massages tailored to the unique needs of each individual. I believe in the power of touch to heal and rejuvenate, and I am committed to helping our clients achieve holistic wellness.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} data-aos="fade-right">
          <div className="about-item">
            <div className="text">
              <h3>My Team</h3>
              <p>I have assembled a team of skilled and compassionate therapists who share My dedication to excellence. With years of experience in various massage techniques, My team members are experts in their field and are passionate about providing the highest quality care to all our clients.</p>
            </div>
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="about-item">
            <div className="text">
              <h3>My Values</h3>
              <p>At My core, I value integrity, professionalism, and genuine care for my clients' well-being. I am committed to creating a welcoming and inclusive environment where everyone feels valued and respected. Your satisfaction and comfort are my top priorities.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsSection;
