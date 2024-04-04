import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/App.css';
import pic11 from '../assets/pic11.jpg';
import pic22 from '../assets/pic22.jpg';
import pic33 from '../assets/pic33.jpg';

function HeroSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="p-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic11}
            alt="First slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center ">
            <h1 data-aos="fade-up"><b> Welcome to our Spa </b> </h1>
            <p data-aos="fade-up" className="mt-3"> <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b></p>
            <Button id='btn' variant="primary" data-aos="fade-up" className="mt-3"> <b> Learn More </b> </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic22}
            alt="Second slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up">Relax and Unwind</h1>
            <p data-aos="fade-up" className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <Button id='btn' variant="primary" data-aos="fade-up" className="mt-3">Book Now</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic33}
            alt="Third slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up">Pamper Yourself</h1>
            <p data-aos="fade-up" className="mt-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
            <Button id='btn' variant="primary" data-aos="fade-up" className="mt-3">Contact Us</Button>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="scroll-down-indicator text-center">
        <AiOutlineArrowDown size={32} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" />
      </div>
    </Container>
  );
}

export default HeroSection;
