import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FooterSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} data-aos="fade-up">
            <div className="logo-section">
              <h3>Spa Heaven</h3>
              <p>Your ultimate destination for relaxation and rejuvenation</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="social-media-section">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#facebook"><FaFacebook /></a>
                <a href="#twitter"><FaTwitter /></a>
                <a href="#instagram"><FaInstagram /></a>
                <a href="#linkedin"><FaLinkedin /></a>
              </div>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="400">
            <div className="contact-section">
              <h5>Contact Us</h5>
              <p><AiOutlineMail /> info@spaheaven.com</p>
              <p><AiFillPhone /> +1 123-456-7890</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} data-aos="fade-up" data-aos-delay="600">
            <div className="copyright-section">
              <p>&copy; {new Date().getFullYear()} Spa Heaven. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterSection;
