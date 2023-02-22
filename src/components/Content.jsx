import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';

export const Content = () => {




  return (
    <Container>
      <Row className='pd-3'>
        <Col xs={8}>
          <LeftSide />
        </Col>
        <Col>
          <RightSide xs={3} />
        </Col>
      </Row>
    </Container>
  );
};
