import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Mint from '../components/Mint';
import { WELCOME_HEADING, WELCOME_TEXT } from '../data/General';

const WelcomeHero = () => {
  return (
    <Container fluid id='start' className='hero hero-1'>
      <div className='pd-20'>
        <Row className='justify-content-md-center heading'>
          {WELCOME_HEADING}
        </Row>
        <Row className='mt-20 justify-content-md-center'>
          <div style={{ maxWidth: '80%'}}>
            {WELCOME_TEXT}
          </div>
        </Row>
        <Row className='mt-20 justify-content-md-center'>
          <Mint />
        </Row>
      </div>
    </Container>
  );
}

export default WelcomeHero;