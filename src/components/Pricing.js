import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const pricingData = [
  {
    category: 'Facial and Body',
    subcategories: [
      { name: 'Swedish Massage (60 min)', price: '$60' },
      { name: 'Deep Tissue Massage (60 min)', price: '$70' },
      { name: 'Aromatherapy Massage (60 min)', price: '$80' },
    ],
  },
  {
    category: 'Nails and Hair',
    subcategories: [
      { name: 'Manicure', price: '$30' },
      { name: 'Pedicure', price: '$40' },
      { name: 'Haircut', price: '$50' },
    ],
  },
  {
    category: 'Detoxing Baths',
    subcategories: [
      { name: 'Mineral Detox Bath', price: '$45' },
      { name: 'Seaweed Detox Bath', price: '$55' },
      { name:  'Clay Detox Bath', price: '$65' },
    ],
  },
  {
    category: 'Creams and Lotions',
    subcategories: [
      { name: 'Anti-Aging Cream', price: '$75' },
      { name: 'Hydrating Lotion', price: '$40' },
      { name: 'Muscle Relief Cream', price: '$50' },
    ],
  },
];

function PricingSection() {
  return (
    <div className="pricing" data-aos="fade-up">
      <h2>Our Pricing</h2>
      <Accordion>
        {pricingData.map((category, index) => (
          <Card key={index}>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey={index}>
                {category.category}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <ul>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      {subcategory.name} - {subcategory.price}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default PricingSection;
