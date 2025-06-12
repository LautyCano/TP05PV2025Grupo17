import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container 
      fluid
      className="d-flex flex-column justify-content-center align-items-center bg-dark text-white text-center py-5"
      style={{ minHeight: '100vh' }}
    >
      <Row className="justify-content-center">
        <Col xs={10} md={6} lg={4}>
          {/* Imagen de bienvenida */}
          <Image 
            src="/public/fon2.png"  // Asegúrate que la imagen esté en `public/img`
            alt="Bienvenido"
            fluid
            rounded
            className="mb-4"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 className="display-4">Inicio</h1>
          <p className="lead">
            Bienvenido al sistema de gestión de alumnos.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
