import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../assets/pic1.jpg';
import pic6 from '../assets/pic6.jpg';
import pic3 from '../assets/pic3.jpg';

function HeroSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Relax and Rejuvenate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed diam eget risus porta condimentum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic6}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Reduce Stress and Pain</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed diam eget risus porta condimentum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Improve Sleep Quality</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed diam eget risus porta condimentum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
