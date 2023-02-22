import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Switch } from './Switch';

export const TopPage = () => {
  return (
    <Navbar bg="transparent" variant="light">
      <Container>
        <Navbar.Brand href="/">WEATHER</Navbar.Brand>
        <Switch />
      </Container>
    </Navbar>
  )
};
